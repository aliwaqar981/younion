import React, {Component, Children} from 'react';
import {View, Text} from 'react-native';
import {AppStyles} from '../Themes';

class ViewMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, children} = this.props;
    return <View style={[AppStyles.mainContainer, style]}>{children}</View>;
  }
}

export default ViewMain;
