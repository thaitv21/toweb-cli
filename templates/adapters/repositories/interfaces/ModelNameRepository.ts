import { ModelName } from '../../../domains/entities/ModelName';

export interface ModelNameRepository {
  getAll: () => Promise<ModelName[]>
  getOne: (id: string) => Promise<ModelName>
  create: (modelName: ModelName) => Promise<ModelName>
  update: (modelName: ModelName) => Promise<ModelName>
  delete: (modelName: ModelName) => Promise<ModelName>
}
