const path = require('path');
const { copyFile, removeFile, replaceFile } = require('./utils');

const GENERIC_STATELESS_COMPONENT_PATH = 'lib/GenericStatelessComponent';
const GENERIC_STATELESS_COMPONENT_PATH_TMP = 'lib/GenericStatelessComponent';
const GENERIC_COMPONENT_PATH = 'lib/GenericComponent';
const GENERIC_COMPONENT_PATH_TMP = 'lib/GenericComponent';
const GENERIC_COMPONENT_STYLES_PATH = 'lib/Styles';

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

  const componentPath = path.join(stateless ? GENERIC_STATELESS_COMPONENT_PATH : GENERIC_COMPONENT_PATH, 'index.js');
  const componentPathTmp = path.join(stateless ? GENERIC_STATELESS_COMPONENT_PATH_TMP : GENERIC_COMPONENT_PATH_TMP, 'indexTmp.js');
  const componentStylePath = path.join(GENERIC_COMPONENT_STYLES_PATH, 'styles.js');

  created = created && copyFile(componentPath, componentPathTmp);
  created = created && replaceFile(componentPathTmp, /GenericComponent/g, name);
  created = created && copyFile(componentPathTmp, indexNewPath);
  created = created && copyFile(componentStylePath, stylesNewPath);
  return created && removeFile(componentPathTmp);
};

exports.createComponent = createComponent;
