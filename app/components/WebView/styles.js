import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default EStyleSheet.create({
  fullScreen: {
    marginTop: getStatusBarHeight(),
    height: h,
    width: w,
  },
});
