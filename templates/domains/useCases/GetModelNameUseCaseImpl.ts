import { modelNameRepository } from '../../adapters/repositories';
import { GetModelNameUseCase } from './interfaces/GetModelNameUseCase';

export default class GetModelNameUseCaseImpl implements GetModelNameUseCase {
  invoke = async (id: string) => modelNameRepository.getOne(id);
}
