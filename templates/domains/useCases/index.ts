import CreateModelNameUseCaseImpl from "./CreateModelNameUseCaseImpl";
import DeleteModelNameUseCaseImpl from "./DeleteModelNameUseCaseImpl";
import GetAllModelNameUseCaseImpl from "./GetAllModelNameUseCaseImpl";
import GetModelNameUseCaseImpl from "./GetModelNameUseCaseImpl";
import { CreateModelNameUseCase } from "./interfaces/CreateModelNameUseCase";
import { DeleteModelNameUseCase } from "./interfaces/DeleteModelNameUseCase";
import { GetAllModelNameUseCase } from "./interfaces/GetAllModelNameUseCase";
import { GetModelNameUseCase } from "./interfaces/GetModelNameUseCase";
import { UpdateModelNameUseCase } from "./interfaces/UpdateModelNameUseCase";
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