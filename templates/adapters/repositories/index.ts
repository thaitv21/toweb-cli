import { ModelNameRepository } from "./interface/ModelNameRepository";
import ModelNameRepositoryImpl from "./ModelNameRepositoryImpl";

interface Repositories {
  modelNameRepository: ModelNameRepository,
}

const repositories : Repositories = {
  modelNameRepository: new ModelNameRepositoryImpl()
}

export const {
  modelNameRepository,
} = repositories;