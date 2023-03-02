/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {totalSize, height, width} from 'react-native-dimension';
import {Colors, FontFamily, FontSize} from '.';

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
    height: null,
    width: null,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.appBgColor1,
  },
  mainContainerRed: {
    flex: 1,
    backgroundColor: Colors.appColor1,
  },
  h1: {
    fontSize: FontSize.h1,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextBold,
  },
  h2: {
    fontSize: FontSize.h2,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextBold,
  },
  h3: {
    fontSize: FontSize.h3,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextBold,
  },
  h4: {
    fontSize: FontSize.h4,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextBold,
  },
  h5: {
    fontSize: FontSize.h5,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextMedium,
  },
  h6: {
    fontSize: FontSize.h6,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextMedium,
  },
  textLarge: {
    fontSize: FontSize.large,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextRegular,
  },
  textRegular: {
    fontSize: FontSize.regular,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextRegular,
  },
  textMedium: {
    fontSize: FontSize.medium,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextRegular,
  },
  textSmall: {
    fontSize: FontSize.small,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextRegular,
  },
  textTiny: {
    fontSize: FontSize.tiny,
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextRegular,
  },
  inputContainerUnderLined: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFFF',
  },
  inputContainerBorderd: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 0.5,
    borderColor: Colors.appColor1,
  },
  inputContainerColored: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFF',
    borderRadius: 2.5,
  },
  inputField: {
    height: height(7),
    width: width(80),
    color: Colors.appTextColor1,
    fontFamily: FontFamily.appTextLight,
    fontSize: totalSize(1.75),
  },
  inputFieldBorderd: {
    marginHorizontal: width(5),
    height: height(7),
    borderWidth: 0.5,
    borderColor: Colors.appColor1,
    fontSize: totalSize(1.75),
    fontFamily: FontFamily.appTextRegular,
    borderRadius: 2.5,
  },
  inputFieldColored: {
    marginHorizontal: width(5),
    height: height(7),
    fontSize: totalSize(1.75),
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5,
    backgroundColor: '#FFFF',
    borderRadius: 2.5,
  },

  buttonBorderd: {
    marginHorizontal: width(5),
    height: height(8),
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: Colors.appColor1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonColord: {
    marginHorizontal: width(5),
    height: height(8),
    borderRadius: 2.5,
    backgroundColor: Colors.appColor1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SocialButtonColord: {
    height: height(8),
    marginHorizontal: width(5),
    borderRadius: 2.5,
    backgroundColor: Colors.facebook,
    //  alignItems: 'center',
    //  justifyContent: 'center'
  },
  buttonText: {
    fontSize: totalSize(2),
    color: '#000000',
    fontFamily: FontFamily.appTextMedium,
  },
  compContainer: {
    marginHorizontal: width(5),
    marginVertical: height(2.5),
  },
  rowCompContainer: {
    marginHorizontal: width(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height(2.5),
  },
  headerStyle: {
    backgroundColor: Colors.appColor1,
    elevation: 0,
    height: height(10),
    shadowColor: 'transparent',
  },
  headerTitleStyle: {
    fontSize: totalSize(2),
    color: Colors.appTextColor6,
    fontFamily: FontFamily.appTextMedium,
  },
  cardView: {
    marginHorizontal: width(5),
    borderRadius: 5,
    backgroundColor: '#FFFF',
    shadowOffset: {width: 2.5, height: 0},
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  shadow: {
    shadowOffset: {width: 5, height: 0},
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  shadowColored: {
    shadowOffset: {width: 5, height: 2.5},
    shadowColor: Colors.appColor1,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
  textGray: {
    color: Colors.appTextColor4,
  },
  textBold: {
    fontFamily: FontFamily.appTextBold,
  },
  textSemiBold: {
    fontFamily: FontFamily.appTextMedium,
  },
  textLightGray: {
    color: Colors.appTextColor5,
  },
  textPrimaryColor: {
    color: Colors.appColor1,
  },
  textWhite: {
    color: Colors.appTextColor6,
  },
  textError: {
    color: Colors.error,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
