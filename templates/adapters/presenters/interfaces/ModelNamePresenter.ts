import { ModelName } from '../../../domains/entities/ModelName'

export interface ModelNamePresenter {
  getAll: () => Promise<ModelName[]>
  get: (id: string) => Promise<ModelName>
  create: (modelName: ModelName) => Promise<ModelName>
  update: (modelName: ModelName) => Promise<ModelName>
  delete: (modelName: ModelName) => Promise<ModelName>
}