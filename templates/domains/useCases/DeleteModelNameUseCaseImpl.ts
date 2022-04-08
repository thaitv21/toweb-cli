import { modelNameRepository } from "../../adapters/repositories";
import { ModelName } from "../entities/ModelName";
import { DeleteModelNameUseCase } from "./interface/DeleteModelNameUseCase";

export default class DeleteModelNameUseCaseImpl implements DeleteModelNameUseCase {
  invoke = async (modelName: ModelName) => modelNameRepository.delete(modelName)
}