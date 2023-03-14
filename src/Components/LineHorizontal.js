import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { height as h } from 'react-native-dimension';
import { Colors } from '../Themes';

class LineHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {style,height}=this.props
    return (
      <View style={[{height:height?height:h(0.2),backgroundColor:Colors.appBgColor2},style]}>
      </View>
    );
  }
}

export default LineHorizontal;
