import { ModelName } from '../../entities/ModelName';

export interface GetAllModelNameUseCase {
  invoke: () => Promise<ModelName[]>
}
