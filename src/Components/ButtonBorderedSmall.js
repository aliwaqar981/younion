import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppStyles, Colors, FontSize } from '../Themes';
import { width, height, totalSize } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
class ButtonBorderedSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { text, onPress, buttonStyle,rowReverse, textStyle, iconName, iconType, iconSize, iconColor, iconStyle,tintColor } = this.props
        return (
            <TouchableOpacity  onPress={onPress} style={[ { borderRadius: 15 ,paddingHorizontal:width(5),paddingVertical:height(1),borderColor:tintColor?tintColor:Colors.appColor1,borderWidth:1}, buttonStyle]}>
                <View style={{ flexDirection: rowReverse?'row-reverse':'row', alignItems: 'center' }}>
                    {
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={tintColor ? tintColor : Colors.appColor1}
                                iconStyle={[{ marginHorizontal: width(2) }, iconStyle]}
                            />
                            :
                            null
                    }
                    <Text style={[AppStyles.buttonText, { color:tintColor?tintColor: Colors.appColor1 ,fontSize:FontSize.regular}, textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ButtonBorderedSmall;
