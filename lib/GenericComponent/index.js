import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles/styles';

class GenericComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>GenericComponent!</Text>
      </View>
    );
  }
}

GenericComponent.propTypes = {

};

export default GenericComponent;
