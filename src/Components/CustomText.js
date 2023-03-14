// CustomText.js    
import React from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';
import { AppStyles } from '../Themes';
import { width } from 'react-native-dimension';

export default class CustomText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {style,children}=this.props
        return (
                <Text style={[AppStyles.textMedium, AppStyles.textGray,{marginHorizontal:width(5)} ,style]} >
                    {children}
                </Text>
        );
    }
}

