import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {Colors, AppStyles} from '../../Themes';
import * as Animatable from 'react-native-animatable';

export const HeaderBackIcon = props => {
  const {style, onPress, size} = props;
  return (
    <Icon
      name="ios-arrow-back"
      type="ionicon"
      size={size ? size : totalSize(3)}
      //raised
      //reverse
      // reverseColor={Colors.appTextColor6}
      color={Colors.appTextColor6}
      //iconStyle={style}
      onPress={onPress}
      iconStyle={[
        {marginLeft: Platform.OS === 'ios' ? width(5) : width(2.5)},
        style,
      ]}
    />
  );
};
export const IconButton = props => {
  const {style, onPress, iconSize, iconColor, iconName, iconType} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.heartIconContainer, style]}>
      <Icon
        name={iconName ? iconName : 'heart'}
        type={iconType ? iconType : 'material-community'}
        size={iconSize ? iconSize : totalSize(2)}
        color={iconColor ? iconColor : Colors.appTextColor5}
      />
    </TouchableOpacity>
  );
};
export const CloseIcon = props => {
  const {style, onPress, color, size} = props;
  return (
    <Icon
      name="close"
      type="material-community"
      size={size ? size : totalSize(2.5)}
      // raised
      // reverse
      // reverseColor={Colors.appTextColor6}
      color={color ? color : Colors.appColor1}
      iconStyle={style}
      onPress={onPress}
    />
  );
};
export const FilterIcon = props => {
  const {style, onPress, color, size} = props;
  return (
    <Icon
      name="options"
      type="ionicon"
      size={size ? size : totalSize(2.5)}
      //raised
      // reverse
      // reverseColor={Colors.appTextColor6}
      color={color ? color : Colors.appTextColor3}
      iconStyle={style}
      onPress={onPress}
    />
  );
};
export const CustomIcon = props => {
  const {icon, size, animation, duration, color} = props;
  const defaulSize = totalSize(5);
  return (
    <Animatable.View animation={animation} duration={duration}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          height: size ? size : defaulSize,
          width: size ? size : defaulSize,
          tintColor: color,
        }}
      />
    </Animatable.View>
  );
};
export const TouchableCustomIcon = props => {
  const {icon, size, color, onPress} = props;
  const defaulSize = totalSize(5);
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          height: size ? size : defaulSize,
          width: size ? size : defaulSize,
          tintColor: color,
        }}
      />
    </TouchableOpacity>
  );
};

export const IconWithText = props => {
  const {
    text,
    containerStyle,
    title,
    customIcon,
    onPress,
    tintColor,
    iconName,
    iconType,
    iconSize,
    textStyle,
    titleStyle,
    direction,
    textContainer,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[
        {flexDirection: direction ? direction : 'row', alignItems: 'center'},
        containerStyle,
      ]}>
      {customIcon ? (
        <CustomIcon
          icon={customIcon}
          size={iconSize ? iconSize : totalSize(2)}
          color={tintColor ? tintColor : Colors.appColor1}
        />
      ) : (
        <Icon
          name={iconName ? iconName : 'email'}
          type={iconType ? iconType : 'material-community'}
          size={iconSize ? iconSize : totalSize(2)}
          color={tintColor ? tintColor : Colors.appTextColor1}
        />
      )}
      <View
        style={[
          direction === 'column'
            ? {marginVertical: height(1.5)}
            : {marginHorizontal: width(2)},
          textContainer,
        ]}>
        {title ? (
          <Text
            style={[
              AppStyles.textRegular,
              {
                color: tintColor ? tintColor : Colors.appTextColor1,
                fontFamily: FontFamily.appTextBold,
                marginBottom: 5,
              },
              titleStyle,
            ]}>
            {title}
          </Text>
        ) : null}
        <Text
          style={[
            AppStyles.textSmall,
            {color: tintColor ? tintColor : Colors.appTextColor1},
            textStyle,
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heartIconContainer: {
    height: totalSize(4),
    width: totalSize(4),
    backgroundColor: Colors.appBgColor1,
    borderRadius: 100,
    ...AppStyles.center,
    ...AppStyles.shadow,
  },
});
