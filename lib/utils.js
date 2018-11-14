const fse = require('fs-extra');
const replace = require('replace-in-file');
const colors = require('colors');

const copyFile = function (src, dest) {
  try {
    fse.copySync(src, dest);
    return true;
  } catch (err) {
    return false;
  }
};

const removeFile = function (src) {
  try {
    fse.removeSync(src);
    return true;
  } catch (err) {
    return false;
  }
};

const replaceFile = function(files, from, to) {
  const options = {
    files,
    from,
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
  removeFile,
  replaceFile,
  printMessage,
  getPath
};
