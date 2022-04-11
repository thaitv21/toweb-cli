import { ModelName } from '../../entities/ModelName';

export interface DeleteModelNameUseCase {
  invoke: (modelName: ModelName) => Promise<ModelName>
}
