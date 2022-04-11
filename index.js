#! /usr/bin/env node
const { program } = require('commander');
const { resolve } = require('path');
// const { readdir } from 'fs/promises';
const { readdir } = require('fs').promises;
const fs = require('fs');
const { lowerFirstLetter } = require('./utils');;
const chalk = require('chalk');

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

async function createFile(origin, dest, filename, model) {
  const originPath = resolve(__dirname, origin);
  const content = fs.readFileSync(originPath, {encoding: 'utf-8', flag: 'r'});
  const contentToWrite = content.replace(/ModelName/g, model).replace(/modelName/g, lowerFirstLetter(model));
  const pathDir = resolve(dest);
  const path = resolve(pathDir, filename);
  if (!fs.existsSync(pathDir)) {
    fs.mkdirSync(pathDir, {recursive: true});
  }
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, contentToWrite, {flag: 'w'});
    return true;
  }
  return false;
}

async function createEntity(dest, model) {
  console.log(chalk.cyan(`INFO: Generating entity ${model}.ts...`));
  const origin = './templates/domains/entities/ModelName.ts';
  const destDir = resolve(dest, `domains/entities`);
  const filename = `${model}.ts`;
  const saved = await createFile(origin, destDir, filename, model);
  if (!saved) console.log(chalk.yellow(`WARN: Entiry ${model} already exists. Skipped!`));
}

async function createRepository(dest, model) {
  console.log(chalk.cyan(`INFO: Generating repository for ${model}...`));
  // interface
  const interfaceSaved = await createFile(
    './templates/adapters/repositories/interfaces/ModelNameRepository.ts',
    resolve(dest, `adapters/repositories/interfaces`),
    `${model}Repository.ts`,
    model,
  );
  if (!interfaceSaved) console.log(chalk.yellow(`WARN: Inteface ${model}Repository already exists. Skipped!`));
  // implementation
  const implementationSaved = await createFile(
    './templates/adapters/repositories/ModelNameRepositoryImpl.ts',
    resolve(dest, `adapters/repositories`),
    `${model}RepositoryImpl.ts`,
    model,
  );
  if (!implementationSaved) console.log(chalk.yellow(`WARN: Repository ${model}Repository already exists. Skipped!`));
}

async function createUseCases(dest, model) {
  console.log(chalk.cyan(`INFO: Generating use cases for ${model}...`));
  const useCases = ['GetAll', 'Create', 'Delete', 'Get', 'Update'];
  await Promise.all(useCases.map(async (useCase) => {
    const interfaceSaved = await createFile(
      `./templates/domains/useCases/interfaces/${useCase}ModelNameUseCase.ts`,
      resolve(dest, `domains/useCases/interfaces`),
      `${useCase}${model}UseCase.ts`,
      model,
    );
    if (!interfaceSaved) console.log(chalk.yellow(`WARN: Inteface ${useCase}${model}UseCase already exists. Skipped!`));
    // implementation
    const implementationSaved = await createFile(
      `./templates/domains/useCases/${useCase}ModelNameUseCaseImpl.ts`,
      resolve(dest, `domains/useCases`),
      `${useCase}${model}UseCaseImpl.ts`,
      model,
    );
    if (!implementationSaved) console.log(chalk.yellow(`WARN: Usecase ${useCase}${model}UseCaseImpl already exists. Skipped!`));
  }));
}

async function createPresenter(dest, model) {
  console.log(chalk.cyan(`INFO: Generating presenter for ${model}...`));
  const interfaceSaved = await createFile(
    './templates/adapters/presenters/interfaces/ModelNamePresenter.ts',
    resolve(dest, `adapters/presenters/interfaces`),
    `${model}Presenter.ts`,
    model,
  );
  if (!interfaceSaved) console.log(chalk.yellow(`WARN: Inteface ${model}Presenter already exists. Skipped!`));
  const implementationSaved = await createFile(
    './templates/adapters/presenters/ModelNamePresenterImpl.ts',
    resolve(dest, `adapters/presenters`),
    `${model}PresenterImpl.ts`,
    model,
  );
  if (!implementationSaved) console.log(chalk.yellow(`WARN: Presenter ${model}Presenter already exists. Skipped!`));
}


function printConsole(model) {
  console.log(chalk.blue('Add the following lines to your ') + chalk.blue.bold('adapters/repositories/index.js:'));
  console.log(chalk.green.italic(
  `
  interface Repositories {
    ...,
    ${lowerFirstLetter(model)}Repository: ${model}Repository,
  }

  const repositories : Repositories = {
    ....
    ${lowerFirstLetter(model)}Repository: new ${model}RepositoryImpl(),
  }

  export const {
    ...,
    ${lowerFirstLetter(model)}RepositoryRepository,
  } = repositories;
  `
  ));

  console.log(chalk.blue('Add the following lines to your ') + chalk.blue.bold('domains/useCases/index.js:'));
  console.log(chalk.green.italic(
  `
  interface UseCases {
    ...,
    getAll${model}UseCase: GetAll${model}UseCase,
    get${model}UseCase: Get${model}UseCase,
    create${model}UseCase: Create${model}UseCase,
    update${model}UseCase: Update${model}UseCase,
    delete${model}UseCase: Delete${model}UseCase,
  }

  const useCases : UseCases = {
    ...,
    getAll${model}UseCase: new GetAll${model}UseCaseImpl(),
    get${model}UseCase: new Get${model}UseCaseImpl(),
    create${model}UseCase: new Create${model}UseCaseImpl(),
    update${model}UseCase: new Update${model}UseCaseImpl(),
    delete${model}UseCase: new Delete${model}UseCaseImpl(),
  };

  export const {
    ...,
    getAll${model}UseCase,
    get${model}UseCase,
    create${model}UseCase,
    update${model}UseCase,
    delete${model}UseCase,
  } = useCases;
  `
  ));

  console.log(chalk.blue('Add the following lines to your ') + chalk.blue.bold('adapters/presenters/index.js:'));
  console.log(chalk.green.italic(
  `
  interface Presenters {
    ...,
    ${lowerFirstLetter(model)}Presenter: ${model}Presenter,
  }

  const presenters : Presenters = {
    ...,
    ${lowerFirstLetter(model)}Presenter: new ${model}PresenterImpl(),
  };

  export const {
    ...,
    ${lowerFirstLetter(model)}Presenter,
  } = presenters;
  `
  ));
}

const generate = async (options) => {
  const model = options.model;
  const cwd = process.cwd();
  await createEntity(cwd, model);
  await createRepository(cwd, model);
  await createUseCases(cwd, model);
  await createPresenter(cwd, model);

  printConsole(model);

}

program.command('generate')
  .option('--model <model>', 'Model name')
  .action(generate);

program.parse();