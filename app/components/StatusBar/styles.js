import EStyleSheet from 'react-native-extended-stylesheet';
import { Constants } from 'expo';

export default EStyleSheet.create({
  statusBar: {
    backgroundColor: 'transparent',
    height: Constants.statusBarHeight,
  },
});
