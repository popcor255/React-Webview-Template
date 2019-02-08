/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { MyStatusBar } from '../components/StatusBar';
import { MyWebView } from '../components/WebView';
import { Container } from '../components/Container';

class Home extends Component {
  render() {
    return (
      <Container>
        <MyStatusBar />
        <MyWebView />
      </Container>
    );
  }
}

export default Home;
