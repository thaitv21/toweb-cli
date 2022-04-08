#! /usr/bin/env node
const { program } = require('commander');

program.command('gen')
  .option('--model <model>', 'Model name')
  .action((options) => {
    const model = options.model;
    console.log('model', model);
  });

program.parse();