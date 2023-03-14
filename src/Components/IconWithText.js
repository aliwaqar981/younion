import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CustomIcon } from '.';
import { totalSize, width } from 'react-native-dimension';
import { AppStyles, Colors, FontFamily } from '../Themes';
import { Icon } from 'react-native-elements';

class IconWithText extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { text, containerStyle,title, customIcon, onPress, tintColor, iconName, iconType, iconSize, column, textStyle,titleStyle } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ flexDirection: column ? 'column' : 'row', alignItems: 'center', }, containerStyle]}>
                {
                    customIcon ?
                        <CustomIcon source={customIcon} size={iconSize ? iconSize : totalSize(2.5)} color={tintColor ? tintColor : Colors.appTextColor1} />
                        :
                        <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={iconSize ? iconSize : totalSize(2.5)} color={tintColor ? tintColor : Colors.appTextColor1} />
                }
               <View style={{marginHorizontal:10}}>
               {
                    title?
                    <Text style={[AppStyles.textRegular, { color: tintColor ? tintColor : Colors.appTextColor1, fontFamily: FontFamily.appTextBold,marginBottom:5 }, titleStyle]}>{title}</Text>
                    :
                    null
                }
                <Text style={[AppStyles.textMedium, { color: tintColor ? tintColor : Colors.appTextColor1,  fontFamily: FontFamily.appTextLight }, textStyle]}>{text}</Text>
               </View>
            </TouchableOpacity>
        );
    }
}

export default IconWithText;
