const path = require('path');
const { copyFile, removeFile, replaceFile } = require('./utils');

const GENERIC_STATELESS_COMPONENT_PATH = './lib/genericStateless.js';
const GENERIC_STATELESS_COMPONENT_PATH_TMP = './lib/genericStatelessTmp.js';
const GENERIC_COMPONENT_PATH = './lib/generic.js';
const GENERIC_COMPONENT_PATH_TMP = './lib/genericTmp.js';
const GENERIC_COMPONENT_STYLES_PATH = './lib/styles.js';

const createComponent = function(name, newPath, stateless) {
  let created = true;
  let indexNewPath = `${name}/index.js`;
  let stylesNewPath = `${name}/styles.js`;

  if (newPath !== '') {
    indexNewPath = newPath.charAt(newPath.length - 1) === '/' ?
      `${newPath}${name}/index.js` : `${newPath}/${name}/index.js`;

    stylesNewPath = newPath.charAt(newPath.length - 1) === '/' ?
      `${newPath}${name}/styles.js` : `${newPath}/${name}/styles.js`;
  }

  const componentPath = stateless ? GENERIC_STATELESS_COMPONENT_PATH : GENERIC_COMPONENT_PATH;
  const componentPathTmp = stateless ? GENERIC_STATELESS_COMPONENT_PATH_TMP : GENERIC_COMPONENT_PATH_TMP;

  created = created && copyFile(componentPath, componentPathTmp);
  created = created && replaceFile(componentPathTmp, /GenericComponent/g, name);
  created = created && copyFile(componentPathTmp, indexNewPath);
  created = created && copyFile(GENERIC_COMPONENT_STYLES_PATH, stylesNewPath);
  return created && removeFile(componentPathTmp);
};

exports.createComponent = createComponent;
