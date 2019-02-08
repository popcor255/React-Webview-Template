/* eslint-disable react/prefer-stateless-function */
/* eslint-disable prefer-template */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import styles from './styles';

class MyStatusBar extends Component {
  render() {
    return <StatusBar transparent style={styles.statusBar} barStyle="light-content" />;
  }
}

export default MyStatusBar;
