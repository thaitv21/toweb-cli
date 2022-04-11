import { ModelName } from '../../entities/ModelName';

export interface GetModelNameUseCase {
  invoke: (id: string) => Promise<ModelName>
}
