import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import {
  ViewMain,
  AppFooter,
  IconWithText,
  LogoRed,
  Logo,
  ChatItem,
  Spacer,
  ButtonColored,
  CustomText,
  ButtonBordered,
  RowView,
  InputWithTitleIcon,
  CustomPicker,
  ButtonColoredSmall,
  CloseIcon,
} from '../../../Components';
import {
  Colors,
  AppStyles,
  FontFamily,
  FontSize,
  Metrics,
} from '../../../Themes';
import {Icon, CheckBox} from 'react-native-elements';
import {totalSize, width, height} from 'react-native-dimension';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import {constants, validations} from '../../../Stores';
import Tooltip from 'react-native-walkthrough-tooltip';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import colors from '../../../Themes/Colors';
const TooltipRef = null;
class Chats extends Component {
  constructor(props) {
    super(props);
    const that = this;
    this.state = {
      chats: [
        {
          title: 'General Updates',
          created: '3 days ago',
          new_message: 3,
          last_message: 'VP Marketing was let go……',
        },
        {
          title: 'CEO calls on Saturday',
          created: '3 days ago',
          up_votes: '89',
          down_votes: '9',
          new_message: 5,
          last_message: 'Why can’t he simply send an email to …..',
        },
      ],
      other_chats: [
        {
          title: 'Salary Not Equal for Women',
          created: '3 days ago',
          up_votes: '89',
          down_votes: '9',
          new_message: null,
          last_message: '',
        },
        {
          title: 'Filthy Toilets',
          created: '3 days ago',
          up_votes: '63',
          down_votes: '14',
          new_message: null,
          last_message: '',
        },
        {
          title: 'Not Overtime payment',
          created: '3 days ago',
          up_votes: '89',
          down_votes: '9',
          new_message: null,
          last_message: '',
        },
        {
          title: 'Workplace Harassment',
          created: '3 days ago',
          up_votes: '63',
          down_votes: '14',
          new_message: null,
          last_message: '',
        },
      ],
      isWelcomeModalVisible: false,
      isInviteModalVisible: false,
      isManagmentModalVisible: false,
      instructions: [
        'Do not Bully',
        'Be positive, be fair',
        'Try to resolve',
        'Love & Enjoy',
        'Goodluck',
      ],
      inviteFriend: true,
      managerTitles: [
        {
          label: 'CEO',
          value: 'CEO',
        },
        {
          label: 'C-Level',
          value: 'C-Level',
        },
        {
          label: 'VP',
          value: 'VP',
        },
        {
          label: 'Director/Head of',
          value: 'Director/Head of',
        },
      ],
      selectedManagerTitle: '',
      visible: '',
      visibleError: '',
      isToolTipVisible: false,
      inviteFirstName: '',
      inviteLastName: '',
      inviteEmail: '',
      inviteFirstNameError: '',
      inviteLastNameError: '',
      inviteEmailError: '',
      inviteManagerTitleError: '',
    };
    props.navigation.setOptions({
      // headerLeft: () =>
      // <Animatable.View animation="slideInLeft" style={[AppStyles.rowView, {}]}>
      //     <Text  style={[AppStyles.textSmall,AppStyles.textGray,{marginHorizontal:width(5),fontFamily:FontFamily.appTextMedium}]}>Donate</Text>
      // </Animatable.View>,
      headerTitle: () => (
        <Animatable.View
          animation="slideInDown"
          style={[AppStyles.rowView, {}]}>
          {/* <IconWithText
             text="Live"
             textStyle={[AppStyles.headerTitleStyle]}
             iconName="ios-arrow-down"
             iconType="ionicon"
             tintColor={Colors.appTextColor6}
             //onPress={that.togglePostalCodeModal}
             reverseRow
           /> */}
          <View style={AppStyles.rowView}>
            <Text
              style={[
                AppStyles.textRegular,
                AppStyles.textWhite,
                {fontSize: FontSize.h6},
              ]}>
              APPLE{' '}
            </Text>
            <Logo height={height(2.5)} width={width(25)} />
          </View>
        </Animatable.View>
      ),
      headerRight: () => (
        <Animatable.View
          animation="slideInRight"
          style={[AppStyles.rowView, {}]}>
          <Icon
            name="account-plus"
            type="material-community"
            color={Colors.appTextColor6}
            size={totalSize(2.5)}
            onPress={() => that.toggleInviteModal()}
            //onPress={() => that.onShare(AppShareOptions)}
            iconStyle={{marginHorizontal: width(5)}}
          />
        </Animatable.View>
      ),
    });
  }
  toggleWelcomeModal = () =>
    this.setState({isWelcomeModalVisible: !this.state.isWelcomeModalVisible});
  toggleInviteModal = () =>
    this.setState({isInviteModalVisible: !this.state.isInviteModalVisible});
  toggleManagmentModal = () =>
    this.setState({
      isManagmentModalVisible: !this.state.isManagmentModalVisible,
    });
  toggleToolTip = () =>
    this.setState({isToolTipVisible: !this.state.isToolTipVisible});

  componentDidMount = () => {
    this.triggerWelcome();
    //this.toggleToolTip()
    //this.props.navigation.navigate('managment')
  };
  triggerWelcome = () => {
    setTimeout(() => {
      this.toggleWelcomeModal();
    }, 2000);
  };
  onGetStarted = () => {
    this.toggleWelcomeModal();
    setTimeout(() => {
      //this.toggleManagmentModal()
      //this.props.navigation.navigate('managment')
      this.toggleToolTip();
    }, 1200);
  };
  onGotIt = () => {
    this.toggleToolTip();
    //this.toggleWelcomeModal();
    setTimeout(() => {
      //this.toggleManagmentModal()
      this.props.navigation.navigate('managment');
    }, 1000);
  };
  onAddAnotherInvite = () => {
    this.setState({
      // inviteFriend:true,
      selectedManagerTitle: '',
      inviteFirstName: '',
      inviteLastName: '',
      inviteEmail: '',
    });
  };
  validateInviteFields = () => {
    const {
      isInviteModalVisible,
      inviteFriend,
      managerTitles,
      selectedManagerTitle,
      inviteFirstName,
      inviteLastName,
      inviteEmail,
      inviteFirstNameError,
      inviteLastNameError,
      inviteEmailError,
      inviteManagerTitleError,
    } = this.state;
    inviteFirstName.length < 2
      ? this.setState({inviteFirstNameError: 'At least 2 characters'})
      : this.setState({inviteFirstNameError: ''});
    inviteLastName.length < 2
      ? this.setState({inviteLastNameError: 'At least 2 characters'})
      : this.setState({inviteLastNameError: ''});
    !inviteEmail
      ? this.setState({inviteEmailError: 'Email is required'})
      : !validations.validateEmail(inviteEmail)
      ? this.setState({inviteEmailError: 'Invalid email'})
      : this.setState({inviteEmailError: ''});
    !selectedManagerTitle
      ? this.setState({inviteManagerTitleError: 'Select manager title'})
      : this.setState({inviteManagerTitleError: ''});
    //!selectedManagerTitle ? this.setState({ inviteEmailError: 'Selecte manager title' }) : this.setState({ inviteEmailError: '' })
    if (inviteFriend) {
      if (
        inviteFirstName &&
        inviteLastName &&
        validations.validateEmail(inviteEmail)
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        inviteFirstName &&
        inviteLastName &&
        validations.validateEmail(inviteEmail) &&
        selectedManagerTitle
      ) {
        return true;
      } else {
        return false;
      }
    }
  };
  onNextInvite = () => {
    if (this.validateInviteFields()) {
      this.toggleInviteModal();
      this.setState({
        inviteFriend: true,
        selectedManagerTitle: '',
        inviteFirstName: '',
        inviteLastName: '',
        inviteEmail: '',
      });
    }
  };
  renderChats = ({data, onPress}) => {
    return (
      <View>
        {/* <View style={{ backgroundColor: Colors.appBgColor2 }}>
          <View style={[AppStyles.compContainer]}>
            <Text style={[AppStyles.textSmall]}>Other Companies</Text>
          </View>
        </View> */}

        <FlatList
          data={data}
          scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <ChatItem
                title={item.title}
                created={item.created}
                votes={index > 0 ? true : false}
                upVotes={item.up_votes}
                downVotes={item.down_votes}
                newMessage={item.new_message}
                lastMessage={item.last_message}
                onPress={() => onPress(item)}
                hideLine={index === data.length - 1 ? true : false}
              />
            );
          }}
        />
      </View>
    );
  };
  renderOtherChats = ({data, onPress}) => {
    return (
      <View style={[{opacity: 0.5}]}>
        <View style={{backgroundColor: Colors.appBgColor3}}>
          <View style={[AppStyles.compContainer, {}]}>
            <Text style={[AppStyles.textMedium, AppStyles.textGray]}>
              Other Companies
            </Text>
          </View>
        </View>
        <FlatList
          data={data}
          scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <ChatItem
                containerStyle={{backgroundColor: Colors.appBgColor3 + 'BF'}}
                title={item.title}
                created={item.created}
                votes
                upVotes={item.up_votes}
                downVotes={item.down_votes}
                newMessage={item.new_message}
                lastMessage={item.last_message}
                onPress={() => onPress(item)}
                lineStyle={{backgroundColor: colors.appBgColor3}}
              />
            );
          }}
        />
      </View>
    );
  };
  welcomeModal = () => {
    const {isWelcomeModalVisible, instructions} = this.state;
    return (
      <Modal
        isVisible={isWelcomeModalVisible}
        style={{margin: 0}}
        animationInTiming={constants.modalAnimationTiming}
        animationOutTiming={constants.modalAnimationTiming}
        useNativeDriver={true}>
        <View
          style={[
            AppStyles.cardView,
            {borderRadius: Metrics.modalRadius, padding: totalSize(2.5)},
          ]}>
          <Text
            style={[
              AppStyles.textMedium,
              AppStyles.textCenter,
              AppStyles.textBold,
            ]}>
            Welcome to
          </Text>
          <Spacer height={Metrics.baseMargin} />
          <LogoRed
            containerStyle={{alignItems: 'center'}}
            height={height(5)}
            width={width(40)}
          />
          <Spacer height={Metrics.doubleBaseMargin} />
          <Text
            style={[
              AppStyles.textSmall,
              AppStyles.textGray,
              AppStyles.textCenter,
            ]}>
            We have created this app to help employees make their workplace a
            better place, a fair place
          </Text>
          <Spacer height={Metrics.baseMargin} />
          <Text
            style={[
              AppStyles.textRegular,
              AppStyles.textGray,
              AppStyles.textCenter,
            ]}>
            GIVE <Text style={[AppStyles.textPrimaryColor]}>YOU</Text> A VOICE
          </Text>
          <Spacer height={Metrics.doubleBaseMargin} />
          <View style={[AppStyles.rowView, {}]}>
            <Text style={[AppStyles.textMedium, AppStyles.textGray]}>
              Please keep our{' '}
            </Text>
            <LogoRed height={totalSize(1.5)} />
            <Text style={[AppStyles.textMedium, AppStyles.textGray]}>
              {' '}
              values
            </Text>
          </View>
          <Spacer height={Metrics.baseMargin} />
          {instructions.map((item, key) => {
            return (
              <IconWithText
                text={item}
                tintColor={Colors.appColor1}
                iconName="triangle-right"
                iconSize={totalSize(1.5)}
                iconType="entypo"
                textStyle={[AppStyles.textGray]}
                containerStyle={{marginBottom: 5}}
              />
            );
          })}
          <Spacer height={Metrics.baseMargin} />
          <ButtonColored
            text="Get Started"
            buttonStyle={{marginHorizontal: 0}}
            onPress={this.onGetStarted}
          />
          <Spacer height={Metrics.baseMargin} />
        </View>
      </Modal>
    );
  };
  inviteModal = () => {
    const {
      isInviteModalVisible,
      inviteFriend,
      managerTitles,
      selectedManagerTitle,
      inviteFirstName,
      inviteLastName,
      inviteEmail,
      inviteFirstNameError,
      inviteLastNameError,
      inviteEmailError,
      inviteManagerTitleError,
    } = this.state;
    const checkboxIconSize = totalSize(2);
    return (
      <Modal
        isVisible={isInviteModalVisible}
        style={{margin: 0}}
        onBackdropPress={this.toggleInviteModal}
        onBackButtonPress={this.toggleInviteModal}
        animationInTiming={constants.modalAnimationTiming}
        animationOutTiming={constants.modalAnimationTiming}
        useNativeDriver={true}>
        <View
          style={[
            AppStyles.cardView,
            {borderRadius: Metrics.modalRadius, paddingVertical: height(2.5)},
          ]}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <Text
              style={[
                AppStyles.textMedium,
                AppStyles.textCenter,
                AppStyles.textBold,
              ]}>
              Anonymous Invite
            </Text>
            <Spacer height={Metrics.baseMargin} />
            <RowView style={{marginHorizontal: Metrics.marginHorizontal}}>
              <CheckBox
                containerStyle={[
                  styles.checkboxContainer,
                  inviteFriend ? styles.checkboxContainerChecked : null,
                ]}
                title="Friend"
                // center
                checkedIcon="ios-radio-button-on"
                uncheckedIcon="ios-radio-button-off"
                iconType="ionicon"
                checkedColor={Colors.appColor1}
                checked={inviteFriend}
                size={checkboxIconSize}
                textStyle={[
                  styles.checkBoxText,
                  inviteFriend ? styles.checkBoxTextChecked : null,
                ]}
                onPress={() => this.setState({inviteFriend: true})}
              />
              <Spacer width={Metrics.baseMargin} />
              <CheckBox
                containerStyle={[
                  styles.checkboxContainer,
                  !inviteFriend ? styles.checkboxContainerChecked : null,
                ]}
                title="Manager"
                checkedIcon="ios-radio-button-on"
                uncheckedIcon="ios-radio-button-off"
                iconType="ionicon"
                checkedColor={Colors.appColor1}
                checked={!inviteFriend}
                size={checkboxIconSize}
                textStyle={[
                  styles.checkBoxText,
                  !inviteFriend ? styles.checkBoxTextChecked : null,
                ]}
                onPress={() => this.setState({inviteFriend: false})}
              />
            </RowView>
            <Spacer height={Metrics.baseMargin} />
            {inviteFriend ? (
              <CustomText style={[AppStyles.textSmall, AppStyles.textGray]}>
                Let us know who are the most popular people at work or the ones
                you think suffer / treated badly. Don’t worry, this invite is
                anonymous.
              </CustomText>
            ) : (
              <CustomText style={[AppStyles.textSmall, AppStyles.textGray]}>
                Tell us who are the top managers that can solve company issues
              </CustomText>
            )}
            {!inviteFriend ? (
              <CustomPicker
                title="ADD A MANAGER"
                data={managerTitles}
                placeholder="Manager Title"
                value={selectedManagerTitle}
                error={inviteManagerTitleError}
                onChange={value =>
                  this.setState({
                    selectedManagerTitle: value,
                    inviteManagerTitleError: '',
                  })
                }
              />
            ) : null}
            <RowView style={{alignItems: 'flex-start'}}>
              <InputWithTitleIcon
                onChangeText={text => this.setState({inviteFirstName: text})}
                value={inviteFirstName}
                title="FIRST NAME"
                containerStyle={{flex: 1}}
                placeholder="Name Here"
                error={inviteFirstNameError}
              />
              <InputWithTitleIcon
                onChangeText={text => this.setState({inviteLastName: text})}
                value={inviteLastName}
                title="LAST NAME"
                containerStyle={{flex: 1}}
                placeholder="Name Here"
                error={inviteLastNameError}
              />
            </RowView>
            <InputWithTitleIcon
              onChangeText={text => this.setState({inviteEmail: text})}
              value={inviteEmail}
              title="EMAIL"
              placeholder="Add email here"
              error={inviteEmailError}
              // placeholder=""
            />
            <Spacer height={Metrics.baseMargin * 1.5} />
            <ButtonBordered
              text="Add Another"
              buttonStyle={{}}
              onPress={this.onAddAnotherInvite}
            />
            <Spacer height={Metrics.smallMargin} />
            <ButtonColored
              text="Next"
              buttonStyle={{}}
              // onPress={this.toggleInviteModal}
              onPress={() => this.onNextInvite()}
            />
            <Spacer height={Metrics.baseMargin} />
            <View
              style={[
                {position: 'absolute', top: 0, right: Metrics.smallMargin},
              ]}>
              <CloseIcon
                onPress={() => {
                  this.toggleInviteModal();
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </Modal>
    );
  };
  // ManagmentModal = ({ }) => {
  //   const { isManagmentModalVisible, visible, visibleError } = this.state
  //   return (
  //     <Modal
  //       isVisible={isManagmentModalVisible}
  //       style={{ margin: 0 }}
  //       onBackdropPress={this.toggleManagmentModal}
  //       useNativeDriver={true}
  //     //  transparent
  //     //animationType="slide"
  //     >
  //       <View style={{ flex: 1, justifyContent: 'center' }}>
  //         <View style={[AppStyles.cardView, { borderRadius: Metrics.modalRadius }]}>
  //           <Spacer height={Metrics.marginTop} />
  //           <Text style={[AppStyles.textMedium, AppStyles.textCenter, AppStyles.textMedium]}>You can make the change!</Text>
  //           <Spacer height={Metrics.marginBottom} />
  //           <CustomText style={[{ fontSize: FontSize.small }]}>
  //             Hi, we have noticed you are the company’s CEO. As management you will be notified on new issues as we are sure you want to be in the loop.
  //         </CustomText>
  //           <Spacer height={Metrics.baseMargin} />
  //           <CustomText style={[{ fontSize: FontSize.small }]}>
  //             Management appears with their names. Please state that you are aware by typing <Text style={[AppStyles.textPrimaryColor]}>VISIBLE.</Text>
  //           </CustomText>
  //           <InputWithTitleIcon
  //             title="TYPE HERE"
  //             placeholder={'VISIBLE'}
  //             onChangeText={(text) => this.setState({ visible: text })}
  //             error={visibleError}
  //           />
  //           <Spacer height={Metrics.marginTop} />
  //           <ButtonColored
  //             text="Proceed"
  //             onPress={this.toggleManagmentModal}
  //           />
  //           <Spacer height={Metrics.doubleBaseMargin} />
  //         </View>
  //       </View>
  //     </Modal>
  //   )
  // }
  renderTooltip = () => {
    const {isToolTipVisible} = this.state;
    return (
      <View
        style={{
          position: 'absolute',
          bottom: -totalSize(2),
          left: width(25 + 7),
        }}>
        {/* <Tooltip
         // ref={TooltipRef}
        // ref={ref=>this.tooltipRef=ref}
          backgroundColor={Colors.appBgColor1}
          // withOverlay={false}
          overlayColor={Colors.appBgColor4 + '40'}
          height={height(12.5)}
          width={width(50)}
          //highlightColor="red"
          containerStyle={[{alignSelf:'center'}]}
          toggleOnPress={true}
          popover={
         <View style={[AppStyles.center]}>
            <Text style={[AppStyles.textSmall,AppStyles.textLightGray]}>Start a discussion</Text>
            <Spacer height={height(2)}/>
            <ButtonColoredSmall
            text="Got it"
            buttonStyle={{backgroundColor:Colors.appBgColor4+'BF',borderRadius:Metrics.buttonRadius,paddingHorizontal:width(10)}}
         //  onPress={()=>this.tooltipRef.current.toggleTooltip()}
          //onPress={()=>TooltipRef.toggleTooltip()}
            />
         </View>
        }
        >
         <View><Text>sd</Text></View>
        </Tooltip> */}
        <Tooltip
          isVisible={isToolTipVisible}
          backgroundColor={Colors.appTextColor1 + '80'}
          disableShadow={true}
          content={
            <View style={[{marginHorizontal: width(10)}, AppStyles.center]}>
              <Spacer height={Metrics.tinyMargin} />
              <Text
                style={[
                  AppStyles.textSmall,
                  AppStyles.textLightGray,
                  AppStyles.textCenter,
                ]}>
                Start a discussion
              </Text>
              <Spacer height={Metrics.baseMargin} />
              <ButtonColoredSmall
                text="Got it"
                buttonStyle={{
                  backgroundColor: Colors.appBgColor4 + 'BF',
                  borderRadius: Metrics.buttonRadius,
                  paddingHorizontal: width(10),
                }}
                //  onPress={()=>this.tooltipRef.current.toggleTooltip()}
                onPress={() => {
                  this.onGotIt();
                }}
              />
              <Spacer height={Metrics.baseMargin} />
            </View>
          }
          placement="top"
          // onClose={this.toggleToolTip}
        >
          <Text style={{color: 'transparent'}}>Tooltip</Text>
        </Tooltip>
      </View>
    );
  };
  render() {
    const {other_chats, chats} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <ViewMain style={{backgroundColor: Colors.appColor1}}>
        <AppFooter>
          <ScrollView>
            <this.renderChats
              data={chats}
              //onPress={(item) => navigate('chatScreen', { item: item })}
              onPress={item => navigate('chatScreen1', {item: item})}
            />
            <this.renderOtherChats
              data={other_chats}
              onPress={item => {}}
              //onPress={(item) => navigate('chatScreen', { item: item })}
            />
          </ScrollView>
        </AppFooter>
        <this.welcomeModal />
        <this.inviteModal />
        <this.renderTooltip />
        {/* <this.ManagmentModal /> */}
      </ViewMain>
    );
  }
}

export default Chats;

const styles = StyleSheet.create({
  checkboxContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: Colors.appTextColor4,
    padding: totalSize(1.5),
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 0,
  },
  checkboxContainerChecked: {
    borderColor: Colors.appColor1,
  },
  checkBoxText: {
    fontWeight: 'normal',
    marginLeft: width(5),
    ...AppStyles.textSmall,
  },
  checkBoxTextChecked: {
    ...AppStyles.textPrimaryColor,
  },
});
