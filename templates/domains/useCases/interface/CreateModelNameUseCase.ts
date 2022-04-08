import { ModelName } from "../../entities/ModelName";

export interface CreateModelNameUseCase {
  invoke: (modelName: ModelName) => Promise<ModelName>
}