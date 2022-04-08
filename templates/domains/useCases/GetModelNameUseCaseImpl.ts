import { modelNameRepository } from "../../adapters/repositories";
import { GetModelNameUseCase } from "./interface/GetModelNameUseCase";

export default class GetModelNameUseCaseImpl implements GetModelNameUseCase {
  invoke = async (id: string) => modelNameRepository.getOne(id);
}