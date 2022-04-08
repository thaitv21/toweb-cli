import { modelNameRepository } from "../../adapters/repositories";
import { GetAllModelNameUseCase } from "./interface/GetAllModelNameUseCase";

export default class GetAllModelNameUseCaseImpl implements GetAllModelNameUseCase {
  invoke = async () => modelNameRepository.getAll();
}