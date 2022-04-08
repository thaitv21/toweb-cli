import { modelNameRepository } from "../../adapters/repositories";
import { ModelName } from "../entities/ModelName";
import { UpdateModelNameUseCase } from "./interface/UpdateModelNameUseCase";

export default class UpdateModelNameUseCaseImpl implements UpdateModelNameUseCase {
  invoke = async (modelName: ModelName) => modelNameRepository.update(modelName);
}