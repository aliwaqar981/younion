import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import {width, totalSize} from 'react-native-dimension';
import {Colors} from '../Themes';

class HeaderBackIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, onPress, size} = this.props;
    return (
      <Icon
        name="ios-arrow-back"
        type="ionicon"
        size={size ? size : totalSize(3)}
        //raised
        //reverse
        // reverseColor={Colors.appTextColor6}
        color={Colors.appTextColor6}
        // iconStyle={style}
        onPress={onPress}
        iconStyle={{
          ...style,
          marginLeft: Platform.OS === 'ios' ? width(5) : width(2.5),
        }}
      />
    );
  }
}

export default HeaderBackIcon;
