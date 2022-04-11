import { modelNameRepository } from '../../adapters/repositories';
import { ModelName } from '../entities/ModelName';
import { CreateModelNameUseCase } from './interfaces/CreateModelNameUseCase';

export default class CreateModelNameUseCaseImpl implements CreateModelNameUseCase {
  invoke = async (modelName: ModelName) => modelNameRepository.create(modelName)
}
