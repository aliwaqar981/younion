import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {AppStyles, FontFamily} from '../Themes';
import {height} from 'react-native-dimension';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {containerStyle, text, textStyle} = this.props;
    return (
      <View
        style={[
          AppStyles.compContainer,
          {marginBottom: height(1)},
          containerStyle,
        ]}>
        <Text
          style={[
            AppStyles.h6,
            {fontFamily: FontFamily.appTextBold},
            textStyle,
          ]}>
          {text}
        </Text>
      </View>
    );
  }
}

export default Title;
