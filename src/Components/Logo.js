import React, {Component} from 'react';
import {Image} from 'react-native';
import {Images} from '../Themes';
import {height as h, width as w} from 'react-native-dimension';
import * as Animatable from 'react-native-animatable';
class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {containerStyle, height, width, animation, duration} = this.props;
    return (
      <Animatable.View
        animation={animation ? animation : 'bounceIn'}
        duration={duration ? duration : 1000}
        style={containerStyle}>
        <Image
          source={Images.logo3x}
          resizeMode={'contain'}
          style={{
            height: height ? height : h(5),
            width: width ? width : w(100),
          }}
        />
      </Animatable.View>
    );
  }
}

export default Logo;
