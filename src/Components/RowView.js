import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {AppStyles} from '../Themes';

class RowView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, children} = this.props;
    return <View style={[AppStyles.rowView, style]}>{children}</View>;
  }
}

export default RowView;
