import { ModelName } from "../../domains/entities/ModelName";
import { createModelNameUseCase, deleteModelNameUseCase, getAllModelNameUseCase, getModelNameUseCase, updateModelNameUseCase } from "../../domains/useCases";
import { ModelNamePresenter } from "./interfaces/ModelNamePresenter";

export default class ModelNamePresenterImpl implements ModelNamePresenter {
  getAll = async () => getAllModelNameUseCase.invoke();
  get = async (id: string) => getModelNameUseCase.invoke(id);
  create = async (modelName: ModelName) => createModelNameUseCase.invoke(modelName);
  update = async (modelName: ModelName) => updateModelNameUseCase.invoke(modelName);
  delete = async (modelName: ModelName) => deleteModelNameUseCase.invoke(modelName);
}