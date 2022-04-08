import { ModelName } from '../../domains/entities/ModelName';
import { ModelNameRepository } from './interface/ModelNameRepository';

export default class ModelNameRepositoryImpl implements ModelNameRepository {
  getAll = async () => {
    throw new Error('Method not implemented');
  };
  getOne = async (id: string) => {
    throw new Error('Method not implemented');
  };
  create = async (modelName: ModelName) => {
    throw new Error('Method not implemented');
  };
  update = async (modelName: ModelName) => {
    throw new Error('Method not implemented');
  };
  delete = async (modelName: ModelName) => {
    throw new Error('Method not implemented');
  };
}