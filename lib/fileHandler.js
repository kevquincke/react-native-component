const { copyFile, replaceFile } = require('./utils');

const GENERIC_REGEXP = 'GenericComponent';
const GENERIC_STATELESS_COMPONENT_PATH = '/genericStateless.js';
const GENERIC_COMPONENT_PATH = '/generic.js';
const GENERIC_COMPONENT_STYLES_PATH = '/styles.js';

const createComponent = function(name, newPath, stateless) {
  let created = true;
  let indexNewPath =`${name}/index.js`;
  let stylesNewPath = `${name}/styles.js`;

  if (newPath !== '') {
    indexNewPath = newPath.charAt(newPath.length - 1) === '/' ?
      `${newPath}${name}/index.js` : `${newPath}/${name}/index.js`;

    stylesNewPath = newPath.charAt(newPath.length - 1) === '/' ?
      `${newPath}${name}/styles.js` : `${newPath}/${name}/styles.js`;
  }

  const componentPath = stateless ? GENERIC_STATELESS_COMPONENT_PATH : GENERIC_COMPONENT_PATH;

  created = created && replaceFile(componentPath, GENERIC_REGEXP, name);
  created = created && copyFile(componentPath, indexNewPath);
  created = created && copyFile(GENERIC_COMPONENT_STYLES_PATH, stylesNewPath);
  return created && replaceFile(componentPath, name, GENERIC_REGEXP);
};

exports.createComponent = createComponent;
