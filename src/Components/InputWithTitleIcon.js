import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {AppStyles, Colors, FontFamily, FontSize} from '../Themes';
import {Icon} from 'react-native-elements';
import {totalSize, height, width} from 'react-native-dimension';
import * as Animatable from 'react-native-animatable';

class InputWithTitleIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }
  handleFocus = () => {
    this.props.onFocus && this.props.onFocus();
    this.setState({isFocused: true});
  };

  handleBlur = () => this.setState({isFocused: false});
  render() {
    const {isFocused} = this.state;
    const {
      rightIconName,
      info,
      autoFocus,
      multiline,
      editable,
      onPress,
      rightIconType,
      animation,
      placeholder,
      onChangeText,
      secureTextEntry,
      value,
      containerStyle,
      title,
      inputLeft,
      inputContainerStyle,
      onPressRightIcon,
      rightIconColor,
      inputStyle,
      error,
    } = this.props;
    return (
      <Animatable.View
        animation={animation ? animation : 'fadeInUp'}
        style={[{}, containerStyle]}>
        {title ? (
          <View
            style={[
              AppStyles.compContainer,
              {marginBottom: height(1.5), marginTop: height(3)},
            ]}>
            <Text
              style={[
                AppStyles.textMedium,
                {fontFamily: FontFamily.appTextBold},
              ]}>
              {title}
              {info ? (
                <Text
                  style={[AppStyles.textSmall, AppStyles.textLightGray, {}]}>
                  {' '}
                  ({info})
                </Text>
              ) : null}
            </Text>
          </View>
        ) : null}
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
          <View
            style={[
              AppStyles.inputContainerBorderd,
              {
                borderColor:
                  isFocused || error ? Colors.appColor1 : Colors.appTextColor5,
                borderRadius: 5,
                borderWidth: 1,
              },
              inputContainerStyle,
            ]}>
            {inputLeft}
            <View style={{flex: 8.5}}>
              <TextInput
                onChangeText={onChangeText}
                value={value}
                editable={editable}
                multiline={multiline}
                placeholder={placeholder}
                // onFocus={onFocus}
                autoFocus={autoFocus}
                placeholderTextColor={Colors.appTextColor5}
                secureTextEntry={secureTextEntry}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={[
                  AppStyles.inputField,
                  {
                    width: null,
                    height: height(6),
                    fontSize: FontSize.small,
                    paddingHorizontal: width(5),
                  },
                  inputStyle,
                ]}
              />
            </View>
            <View style={{flex: 1.5, alignItems: 'center'}}>
              {rightIconName ? (
                <Icon
                  name={rightIconName}
                  type={rightIconType ? rightIconType : 'material-community'}
                  size={totalSize(2)}
                  color={rightIconColor ? rightIconColor : Colors.appTextColor4}
                  iconStyle={{}}
                  onPress={onPressRightIcon}
                />
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {error ? (
          <View
            style={{
              position: 'absolute',
              bottom: -totalSize(1.5),
              right: width(5),
              left: width(5),
            }}>
            <Animatable.Text
              animation="shake"
              style={[
                AppStyles.textTiny,
                AppStyles.textError,
                {fontFamily: FontFamily.appTextBold},
              ]}>
              *{error}
            </Animatable.Text>
          </View>
        ) : null}
      </Animatable.View>
    );
  }
}

export default InputWithTitleIcon;
