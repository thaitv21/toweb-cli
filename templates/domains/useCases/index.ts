import CreateModelNameUseCaseImpl from "./CreateModelNameUseCaseImpl";
import DeleteModelNameUseCaseImpl from "./DeleteModelNameUseCaseImpl";
import GetAllModelNameUseCaseImpl from "./GetAllModelNameUseCaseImpl";
import GetModelNameUseCaseImpl from "./GetModelNameUseCaseImpl";
import { CreateModelNameUseCase } from "./interface/CreateModelNameUseCase";
import { DeleteModelNameUseCase } from "./interface/DeleteModelNameUseCase";
import { GetAllModelNameUseCase } from "./interface/GetAllModelNameUseCase";
import { GetModelNameUseCase } from "./interface/GetModelNameUseCase";
import { UpdateModelNameUseCase } from "./interface/UpdateModelNameUseCase";
import UpdateModelNameUseCaseImpl from "./UpdateModelNameUseCaseImpl";

interface UseCases {
  getAllModelNameUseCase: GetAllModelNameUseCase,
  getModelNameUseCase: GetModelNameUseCase,
  createModelNameUseCase: CreateModelNameUseCase,
  updateModelNameUseCase: UpdateModelNameUseCase,
  deleteModelNameUseCase: DeleteModelNameUseCase,
}

const useCases : UseCases = {
  getAllModelNameUseCase: new GetAllModelNameUseCaseImpl(),
  getModelNameUseCase: new GetModelNameUseCaseImpl(),
  createModelNameUseCase: new CreateModelNameUseCaseImpl(),
  updateModelNameUseCase: new UpdateModelNameUseCaseImpl(),
  deleteModelNameUseCase: new DeleteModelNameUseCaseImpl(),
};

export const {
  getAllModelNameUseCase,
  getModelNameUseCase,
  createModelNameUseCase,
  updateModelNameUseCase,
  deleteModelNameUseCase,
} = useCases;