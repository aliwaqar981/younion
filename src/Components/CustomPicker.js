import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { width, totalSize, height } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import { Colors, FontSize, AppStyles, FontFamily, Metrics } from '../Themes';
import * as Animatable from 'react-native-animatable'
import colors from '../Themes/Colors';

class CustomPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPickerOpen: false
        };
    }
    togglePicker = () => this.setState({ isPickerOpen: !this.state.isPickerOpen })
    render() {
        const { onChange, data, placeholder, animation, title, info, value, error } = this.props
        const { isPickerOpen } = this.state
        return (
            <Animatable.View>
                {
                    title ?
                        <View style={[AppStyles.compContainer, { marginBottom: height(1.5), marginTop: height(2) }]}>
                            <Text style={[ AppStyles.textMedium,AppStyles.textBold]}>{title}
                                {
                                    info ?
                                        <Text style={[AppStyles.textSmall, AppStyles.textLightGray, {}]}>  ({info})</Text>
                                        :
                                        null
                                }
                            </Text>
                        </View>
                        :
                        null
                }
                {/* <RNPickerSelect
                    onValueChange={onChange}
                    items={data}
                    placeholder={placeholderObject}
                    useNativeAndroidPickerStyle={false}
                    //pickerProps={{ mode: 'dropdown' }}
                    style={{
                        ...pickerSelectStyles,
                        iconContainer: {
                            top: height(2),
                            right: width(10),
                        },
                    }}
                    Icon={() => <Icon name="triangle-down" type="octicon" size={totalSize(1.75)} color={Colors.appTextColor5} />}
                /> */}

                {
                    !isPickerOpen ?
                        <Animatable.View animation="fadeInUp">
                            <TouchableOpacity
                                onPress={this.togglePicker}
                                style={[AppStyles.inputContainerBorderd,
                                {
                                    paddingVertical: height(2),
                                    paddingHorizontal: width(5),
                                    justifyContent: 'space-between',
                                    borderColor: Colors.appTextColor5,
                                    borderRadius: Metrics.buttonRadius,
                                    borderWidth: 1
                                }
                                ]}>
                                {
                                    value ?
                                        <Text style={[AppStyles.textSmall, {}]}>{value}</Text>
                                        :
                                        <Text style={[AppStyles.textSmall, { color: '#9EA0A4' }]}>{placeholder}</Text>
                                }
                                <Icon name="triangle-down" type="octicon" size={totalSize(1.75)} color={Colors.appTextColor5} />
                            </TouchableOpacity>
                        </Animatable.View>
                        :
                        <Animatable.View animation="fadeInDown" style={{ borderRadius: Metrics.buttonRadius, backgroundColor: colors.appBgColor1, marginHorizontal: width(5), borderWidth: 1, borderColor: Colors.appTextColor4 }}>
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => { this.togglePicker(); onChange(item.label) }}
                                            style={[AppStyles.rowCompContainer]}>
                                            <Text style={[AppStyles.textSmall, { color: '#9EA0A4' }]}>{item.label}</Text>
                                            {
                                                index === 0 ?
                                                    <Icon name="triangle-down" type="octicon" size={totalSize(1.75)} color={Colors.appTextColor5} />
                                                    :
                                                    null
                                            }
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </Animatable.View>
                }
                {
                    error ?
                        <View style={{ position: 'absolute', bottom: -totalSize(1.5), right: width(5), left: width(5) }}>
                            <Animatable.Text animation="shake" style={[AppStyles.textTiny, AppStyles.textError, {}]}>*{error}</Animatable.Text>
                        </View>
                        :
                        null
                }
            </Animatable.View>
        );
    }
}

export default CustomPicker;

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: FontSize.small,
        fontFamily: FontFamily.appTextRegular,
        //paddingVertical: height(2),
        height: height(6),
        paddingHorizontal: width(5),
        marginHorizontal: width(5),
        borderWidth: 1,
        borderColor: Colors.appTextColor5,
        borderRadius: 5,
        color: 'black',
        //paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: totalSize(1.5),
        paddingHorizontal: width(5),
        //paddingVertical: height(2),
        height: height(6),
        marginHorizontal: width(5),
        borderWidth: 1,
        borderColor: Colors.appTextColor5,
        borderRadius: 5,
        color: 'black',
        //paddingRight: 30, // to ensure the text is never behind the icon
    },
});