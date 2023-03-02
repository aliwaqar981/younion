import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Spacer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {height, width} = this.props;
    return <View style={{height: height, width: width}} />;
  }
}

export default Spacer;
