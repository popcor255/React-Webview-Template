/* eslint-disable prefer-template */
import React, { Component } from 'react';
import { BackHandler, Platform, WebView } from 'react-native';
import { Constants } from 'expo';

import styles from './styles';

const info = [
  { id: Constants.deviceId },
  { platform: Constants.platform },
  { deviceName: Constants.deviceName },
  { statusBar: Constants.statusBarHeight },
];

const INJECTEDJAVASCRIPT = 'const info = '
  + info
  + ';'
  + "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";

class MyWebView extends Component {
  webView = {
    canGoBack: false,
    ref: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  };

  render() {
    return (
      <WebView
        source={{ uri: 'https://www.google.com' }}
        style={styles.fullScreen}
        injectedJavaScript={INJECTEDJAVASCRIPT}
        ref={(webView) => {
          this.webView.ref = webView;
        }}
        onNavigationStateChange={(navState) => {
          this.webView.canGoBack = navState.canGoBack;
        }}
        scalesPageToFit={false}
        javaScriptEnabled
        scrollEnabled
      />
    );
  }
}

export default MyWebView;
