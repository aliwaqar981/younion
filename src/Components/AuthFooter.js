import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../Themes';
import * as Animatable from 'react-native-animatable';
class AuthFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {containerStyle, content, animation, children} = this.props;
    return (
      <Animatable.View
        animation={animation ? animation : 'fadeInUpBig'}
        style={[
          {
            flex: 8,
            backgroundColor: Colors.appBgColor1,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
          containerStyle,
        ]}>
        {children}
      </Animatable.View>
    );
  }
}

export default AuthFooter;
