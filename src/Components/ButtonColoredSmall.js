import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppStyles, Colors, FontSize} from '../Themes';
import {width, height, totalSize} from 'react-native-dimension';
import {Icon} from 'react-native-elements';
import {CustomIcon} from '.';
class ButtonColoredSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      text,
      onPress,
      buttonStyle,
      customIcon,
      rowReverse,
      textStyle,
      iconName,
      iconType,
      iconSize,
      iconColor,
      iconStyle,
    } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            borderRadius: 15,
            paddingHorizontal: width(5),
            paddingVertical: height(1),
            backgroundColor: Colors.appColor1,
          },
          buttonStyle,
        ]}>
        <View
          style={{
            flexDirection: rowReverse ? 'row-reverse' : 'row',
            alignItems: 'center',
          }}>
          {customIcon ? (
            <CustomIcon
              icon={customIcon}
              size={iconSize ? iconSize : totalSize(3)}
              color={iconColor ? iconColor : Colors.appTextColor6}
            />
          ) : iconName ? (
            <Icon
              name={iconName ? iconName : 'email-outline'}
              type={iconType ? iconType : 'material-community'}
              size={iconSize ? iconSize : totalSize(3)}
              color={iconColor ? iconColor : Colors.appTextColor6}
              iconStyle={[{}, iconStyle]}
            />
          ) : null}
          <Text
            style={[
              AppStyles.buttonText,
              {color: Colors.appTextColor6, fontSize: FontSize.regular},
              textStyle,
            ]}>
            {' '}
            {text}{' '}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ButtonColoredSmall;
