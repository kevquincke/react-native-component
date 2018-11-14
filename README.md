# react-native-component
[![GitHub issues](https://img.shields.io/github/issues/kevquincke/react-native-component.svg)](https://GitHub.com/kevquincke/react-native-component/issues/)
[![GitHub version](https://badge.fury.io/gh/kevquincke%2Freact-native-component.svg)](https://github.com/kevquincke/react-native-component)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

Generate skeletons for react native components

**Note:** this package assumes you use components
with the following structure:
```
.
├── ComponentName
     ├── index.js
     ├── styles.js  
```

## Installation
```
yarn global add react-native-component
or
npm install -g react-native-component
```

## Usage
To create a component in the current directory

``
react-native-component -n <ComponentName>
``

To create a component in a specified path

``
react-native-component -n <ComponentName> -p <CustomPath>
``

To specify that the component should be stateless

``
react-native-component -n <ComponentName> -s
``

## Example
1. Creating a Login component

``
react-native-component -n Login
``

2. Creating a stateless Button 
component in a specific path

``
react-native-component -n Button -p components/Common
``

