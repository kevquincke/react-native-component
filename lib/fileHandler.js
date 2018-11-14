const { copyFile, removeFile, replaceFile } = require('./utils');

const GENERIC_STATELESS_COMPONENT_PATH = 'lib/GenericStatelessComponent/index.js';
const GENERIC_STATELESS_COMPONENT_PATH_TMP = 'lib/GenericStatelessComponent/indexTmp.js';
const GENERIC_COMPONENT_PATH = 'lib/GenericComponent/index.js';
const GENERIC_COMPONENT_PATH_TMP = 'lib/GenericComponent/indexTmp.js';
const GENERIC_COMPONENT_STYLES_PATH = 'lib/Styles/styles.js';

const createComponent = function(name, path, stateless) {
  let created = true;
  let indexNewPath = `${name}/index.js`;
  let stylesNewPath = `${name}/styles.js`;

  if (path !== '') {
    indexNewPath = path.charAt(path.length - 1) === '/' ?
      `${path}${name}/index.js` : `${path}/${name}/index.js`;

    stylesNewPath = path.charAt(path.length - 1) === '/' ?
      `${path}${name}/styles.js` : `${path}/${name}/styles.js`;
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
