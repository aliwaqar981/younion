import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {AppStyles} from '../Themes';
import {Logo} from '.';
import {height} from 'react-native-dimension';

class AuthHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {containerStyle} = this.props;
    return (
      <View style={[{flex: 2}, AppStyles.center, containerStyle]}>
        <Logo height={height(3)} animation="fadeIn" />
      </View>
    );
  }
}

export default AuthHeader;
