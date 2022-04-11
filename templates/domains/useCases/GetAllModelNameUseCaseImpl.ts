import { modelNameRepository } from '../../adapters/repositories';
import { GetAllModelNameUseCase } from './interfaces/GetAllModelNameUseCase';

export default class GetAllModelNameUseCaseImpl implements GetAllModelNameUseCase {
  invoke = async () => modelNameRepository.getAll();
}
