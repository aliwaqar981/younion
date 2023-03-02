import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppStyles, Colors, FontSize, Metrics} from '../Themes';
import {width, height, totalSize} from 'react-native-dimension';
import {Icon} from 'react-native-elements';
class ButtonColored extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      text,
      onPress,
      buttonStyle,
      textStyle,
      iconName,
      iconType,
      iconSize,
      iconColor,
      iconStyle,
      tintColor,
    } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          AppStyles.buttonColord,
          AppStyles.shadowColored,
          {
            marginHorizontal: width(5),
            borderRadius: Metrics.buttonRadius,
            height: height(6),
          },
          buttonStyle,
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {iconName ? (
            <Icon
              name={iconName ? iconName : 'email-outline'}
              type={iconType ? iconType : 'material-community'}
              size={iconSize ? iconSize : totalSize(3)}
              color={tintColor ? tintColor : Colors.appTextColor6}
              iconStyle={[{marginRight: width(2.5)}, iconStyle]}
            />
          ) : null}
          <Text
            style={[
              AppStyles.buttonText,
              {
                color: tintColor ? tintColor : Colors.appTextColor6,
                fontSize: FontSize.regular,
              },
              textStyle,
            ]}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ButtonColored;
