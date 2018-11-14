#!/usr/bin/env node
const program = require('commander');
const fileHandler = require('../lib/fileHandler');
const { printMessage, getPath } = require('../lib/utils');

const mainProgram = function() {
  program
    .option('-n, --name [value]', 'Name for the component', '')
    .option('-s, --stateless', 'Generate a stateless component')
    .option('-p, --path [value]', 'Path of new component', '')
    .version('0.1.9', '-v, --version')
    .parse(process.argv);

  const { name, stateless, path } = program;

  if (!name || name === '') {
    printMessage('A name for the component must be specified!');
  } else {
    const result = fileHandler.createComponent(name, getPath(path), stateless);

    if (result) {
      printMessage(`The component ${name} was successfully created`);
    } else {
      printMessage(`An error ocurred creating ${name} component`);
    }
  }
};

mainProgram();
