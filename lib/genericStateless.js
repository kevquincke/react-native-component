import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const GenericComponent = () => (
  <View style={styles.container}>
    <Text>GenericComponent!</Text>
  </View>
);

GenericComponent.propTypes = {

};

export default GenericComponent;
