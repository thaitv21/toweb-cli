import { ModelNamePresenter } from './interfaces/ModelNamePresenter';
import ModelNamePresenterImpl from './ModelNamePresenterImpl';

interface Presenters {
  modelNamePresenter: ModelNamePresenter,
}

const presenters : Presenters = {
  modelNamePresenter: new ModelNamePresenterImpl(),
};

export const {
  modelNamePresenter,
} = presenters;