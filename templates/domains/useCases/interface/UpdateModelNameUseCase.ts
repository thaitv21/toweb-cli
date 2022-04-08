import { ModelName } from "../../entities/ModelName";

export interface UpdateModelNameUseCase {
  invoke: (modelName: ModelName) => Promise<ModelName>
}