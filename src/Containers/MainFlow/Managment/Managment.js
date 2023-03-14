import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { ViewMain, AppFooter, IconWithText, LogoRed, Logo, ChatItem, Spacer, ButtonColored, CustomText, ButtonBordered, RowView, InputWithTitleIcon } from '../../../Components';
import { Colors, AppStyles, FontFamily, FontSize, Metrics } from '../../../Themes';
import { Icon, CheckBox } from 'react-native-elements';
import { totalSize, width, height } from 'react-native-dimension';
import * as Animatable from 'react-native-animatable'
import Modal from 'react-native-modal'
import { constants } from '../../../Stores';
class Managment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isManagmentModalVisible: false,
        };
        props.navigation.setOptions({
            headerShown: false,
            headerLeft: () =>
                <View style={[AppStyles.rowView, { marginHorizontal: Metrics.marginHorizontal }]}>
                    <View style={AppStyles.rowView}>
                        <Text style={[AppStyles.textRegular, AppStyles.textWhite, { fontSize: FontSize.h6 }]}>APPLE  </Text>
                        <Logo height={height(2.5)} width={width(25)} />
                    </View>
                </View>,

        });
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.toggleManagmentModal()
        }, 50);
    }
    toggleManagmentModal = () => this.setState({ isManagmentModalVisible: !this.state.isManagmentModalVisible })
    ManagmentModal = ({ }) => {
        const { isManagmentModalVisible, visible, visibleError } = this.state
        const { navigation } = this.props
        return (
            <Modal
                isVisible={isManagmentModalVisible}
                style={{ margin: 0 }}
                // onBackdropPress={this.toggleManagmentModal}
                backdropColor="transparent"
                animationInTiming={constants.modalAnimationTiming}
                animationOutTiming={constants.modalAnimationTiming}
                useNativeDriver={true}
            //  transparent
            //animationType="slide"
            >
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={[AppStyles.cardView, { borderRadius: Metrics.modalRadius }]}>
                        <Spacer height={Metrics.marginTop} />
                        <Text style={[AppStyles.textMedium, AppStyles.textCenter, AppStyles.textBold]}>You can make the change!</Text>
                        <Spacer height={Metrics.marginBottom} />
                        <CustomText style={[{ fontSize: FontSize.small,fontFamily:FontFamily.appTextMedium },]}>
                            Hi, we have noticed you are the company’s CEO. As management you will be notified on new issues as we are sure you want to be in the loop.
          </CustomText>
                        <Spacer height={Metrics.baseMargin} />
                        <CustomText style={[{ fontSize: FontSize.small,fontFamily:FontFamily.appTextMedium  }]}>
                            Management appears with their names. Please state that you are aware by typing <Text style={[AppStyles.textPrimaryColor]}>VISIBLE.</Text>
                        </CustomText>
                        <InputWithTitleIcon
                            title="TYPE HERE"
                            placeholder={'VISIBLE'}
                            onChangeText={(text) => this.setState({ visible: text })}
                            error={visibleError}
                        />
                        <Spacer height={Metrics.marginTop} />
                        <ButtonColored
                            text="Proceed"
                            onPress={() => {
                                this.toggleManagmentModal();
                                navigation.goBack()
                            }}
                        />
                        <Spacer height={Metrics.doubleBaseMargin} />
                    </View>
                </View>
            </Modal>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <this.ManagmentModal />
            </View>
        );
    }
}

export default Managment;
