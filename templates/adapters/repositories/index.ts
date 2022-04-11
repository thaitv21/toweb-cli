import { ModelNameRepository } from './interfaces/ModelNameRepository';
import ModelNameRepositoryImpl from './ModelNameRepositoryImpl';

interface Repositories {
  modelNameRepository: ModelNameRepository,
}

const repositories : Repositories = {
  modelNameRepository: new ModelNameRepositoryImpl()
}

export const {
  modelNameRepository,
} = repositories;
