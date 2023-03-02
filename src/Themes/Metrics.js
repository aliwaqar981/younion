import { Dimensions, Platform, StatusBar } from 'react-native'
import { totalSize } from 'react-native-dimension'

const { width, height } = Dimensions.get('window')

const statusBarHeight = Platform.select({
  ios: 22,
  android: StatusBar.currentHeight
})

// Used via Metrics.baseMargin
const metrics = {
  marginBottom : height*0.025,
  marginTop : height*0.025,
  marginHorizontal: width*0.05,
  marginVertical: height*0.025,
  section: 25,
  tinyMargin: totalSize(0.5),
  smallMargin: totalSize(1),
  baseMargin: totalSize(2),
  doubleBaseMargin: totalSize(5),
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 5,
  modalRadius: 15,
  statusBarHeight:10,
  icons: {
    tiny: totalSize(1.5),
    small: totalSize(2),
    medium: totalSize(2.5),
    large: totalSize(4),
    xl: totalSize(4.5)
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
