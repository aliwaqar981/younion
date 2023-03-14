import React, {Component} from 'react';
import {Image} from 'react-native';
import {Images} from '../Themes';
import {height as h, width as w} from 'react-native-dimension';
import * as Animatable from 'react-native-animatable';
class LogoRed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {containerStyle, height, width, animation, duration} = this.props;
    return (
      <Animatable.View
        animation={animation ? animation : 'fadeIn'}
        duration={duration ? duration : 2000}
        style={containerStyle}>
        <Image
          source={Images.logo_red3x}
          resizeMode={'contain'}
          style={{height: height ? height : h(3), width: width ? width : w(20)}}
        />
      </Animatable.View>
    );
  }
}

export default LogoRed;
