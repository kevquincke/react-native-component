const path = require('path');
const fse = require('fs-extra');
const replace = require('replace-in-file');
const colors = require('colors');

const copyFile = async function (src, dest) {
  try {
    fse.copySync(path.join(__dirname, src), dest);
    return true;
  } catch (err) {
    console.log(colors.red(err));
    return false;
  }
};

const replaceFile = async function(files, from, to) {
  const options = {
    files: path.join(__dirname, files),
    from: new RegExp(from, 'g'),
    to
  };

  return replace.sync(options) !== [];
};

const printMessage = function (message) {
  console.log(colors.green(message));
};

const getPath = function (path) {
  return path.charAt(0) === '/' ? path.slice(1) : path;
};

module.exports = {
  copyFile,
  replaceFile,
  printMessage,
  getPath
};
