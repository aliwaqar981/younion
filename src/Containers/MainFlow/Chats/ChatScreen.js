import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AppStyles, Colors, Metrics, FontSize, Icons, FontFamily } from '../../../Themes';
import { ViewMain, AppFooter, RowView, IconWithText, ButtonBorderedSmall, Spacer, InputWithTitleIcon, ButtonColored, CustomIcon } from '../../../Components';
import { totalSize, width, height } from 'react-native-dimension';
import { GiftedChat, InputToolbar, Send, Actions, Bubble, MessageText, MessageTextProps } from 'react-native-gifted-chat'
import Modal from 'react-native-modal'
import * as Animatable from 'react-native-animatable'
import { Icon } from 'react-native-elements';
import metrics from '../../../Themes/Metrics';
import { constants } from '../../../Stores';
import colors from '../../../Themes/Colors';

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    _id: 1,
                    text: 'Hi, i was just out due to some medical issue, but now i am available till 9 pm.',
                    // createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Mr. No Bullshit',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
                    },
                },
                {
                    _id: 2,
                    text: 'Where You are bro?',
                    //createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Vegitaa',
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZFBWMgoDHYYtrOWKxx_Gq05PfJZ-8ziJorQ&usqp=CAU',
                    },
                },
                {
                    _id: 4,
                    text: 'I am in....!',
                    // createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Mr. No Bullshit',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
                    },
                },
                {
                    _id: 3,
                    text: 'I am going to start a new session for training and i am inviting you all guys to have a good skills in the specific ',
                    // createdAt: new Date(),
                    user: {
                        _id: 3,
                        name: 'Jacky',
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDt3UtZX_rk0slCVjswq6dIS9aY-GDixb_hg&usqp=CAU',
                    },
                },
                {
                    _id: 5,
                    text: 'Hello guys is there any new course of training session for the employee empowerment if yes then please let us know in the chat that if any one need this of interested in the the session or course he/she can easily get this and stay updated!',
                    //createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Mr. No Bullshit',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
                    },
                },
                {
                    _id: 1,
                    text: 'Hi, i was just out due to some medical issue, but now i am available till 9 pm.',
                    // createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Mr. No Bullshit',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
                    },
                },
                {
                    _id: 2,
                    text: 'Where You are bro?',
                    //createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Vegitaa',
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZFBWMgoDHYYtrOWKxx_Gq05PfJZ-8ziJorQ&usqp=CAU',
                    },
                },
                {
                    _id: 4,
                    text: 'I am in....!',
                    //createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Mr. No Bullshit',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
                    },
                },
                {
                    _id: 3,
                    text: 'I am going to start a new session for training and i am inviting you all guys to have a good skills in the specific ',
                    //createdAt: new Date(),
                    user: {
                        _id: 3,
                        name: 'Jacky',
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDt3UtZX_rk0slCVjswq6dIS9aY-GDixb_hg&usqp=CAU',
                    },
                },
                {
                    _id: 5,
                    text: 'Hello guys is there any new course of training session for the employee empowerment if yes then please let us know in the chat that if any one need this of interested in the the session or course he/she can easily get this and stay updated!',
                    //createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Mr. No Bullshit',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
                    },
                },

            ],
            isNameIconModalVisible: false,
            availableIcons: [
                {
                    icon: Icons.Cup,
                    tintColor: '#fed530'
                },
                {
                    icon: Icons.Diamond,
                    tintColor: '#8e9df1'
                },
                {
                    icon: Icons.TrophyCup,
                    tintColor: '#44c581'
                },
                {
                    icon: Icons.GameController,
                    tintColor: '#dd8821'
                },
                {
                    icon: Icons.football,
                    tintColor: '#8e9df1'
                },
                {
                    icon: Icons.WineGlass,
                    tintColor: '#db3639'
                },
                {
                    icon: Icons.Baseball,
                    tintColor: '#3373f8'
                },
                {
                    icon: Icons.OperaGlasses,
                    tintColor: '#410443'
                },
            ],
            selectedAvailableIconIndex: null,
            seeMoreIcons: false,
            iconsGallery: [
                {
                    icon: Icons.Guitar,
                    tintColor: '#fed530'
                },
                {
                    icon: Icons.Micro,
                    tintColor: '#8e9df1'
                },
                {
                    icon: Icons.Idea,
                    tintColor: '#44c581'
                },
                {
                    icon: Icons.Sport,
                    tintColor: '#3373f8'
                },
                {
                    icon: Icons.football,
                    tintColor: '#db3639'
                },
                {
                    icon: Icons.GameConsole,
                    tintColor: '#3373f8'
                },
                {
                    icon: Icons.surfingBoard,
                    tintColor: '#8e9df1'
                },
                {
                    icon: Icons.Hammer,
                    tintColor: '#410443'
                },
                {
                    icon: Icons.SummerHat,
                    tintColor: '#fed530'
                },
                {
                    icon: Icons.Crown,
                    tintColor: '#CCCCCC'
                },
                {
                    icon: Icons.WaggonTruck,
                    tintColor: '#44c581'
                },
                {
                    icon: Icons.SunGlasses,
                    tintColor: '#dd8821'
                },
                {
                    icon: Icons.Commercial,
                    tintColor: '#8e9df1'
                },
                {
                    icon: Icons.quashRacquet,
                    tintColor: '#44c581'
                },
                {
                    icon: Icons.Pacman,
                    tintColor: '#3373f8'
                },
                {
                    icon: Icons.QuickModeOn,
                    tintColor: '#db3639'
                },
                {
                    icon: Icons.Baseball,
                    tintColor: '#3373f8'
                },
                {
                    icon: Icons.AirplaneModeOn,
                    tintColor: '#8e9df1'
                },
                {
                    icon: Icons.Support,
                    tintColor: '#410443'
                },
                {
                    icon: Icons.Headphones,
                    tintColor: '#fed530'
                },
            ],
            selectedGallaryIcon: null,
            allIcons: [],
            selectedAvatarIcon: null,
            vote: '',
            nickname: '',
            nicknameError: ''
        };
        props.navigation.setOptions({
            title: this.props.route.params.item.title
        });
    }
    toggleNameIconModal = () => this.setState({ isNameIconModalVisible: !this.state.isNameIconModalVisible })

    componentDidMount = () => {
        this.getAllAvatarIcons()
        //this.triggerNameIconPopup()
    }
    getAllAvatarIcons = async () => {
        const { availableIcons, iconsGallery } = this.state
        await this.setState({ allIcons: [...availableIcons, ...iconsGallery] })
    }
    triggerNameIconPopup = () => {
        setTimeout(() => {
            this.toggleNameIconModal()
        }, 2000);
    }
    onSelectAvailableIcon = (index) => {
        this.setState({
            selectedAvailableIconIndex: index,
            selectedGallaryIcon: null
        })
    }
    onSelectGallaryIcon = (index) => {
        this.setState({
            selectedGallaryIcon: index,
            selectedAvailableIconIndex: null,
        })
    }
    onSelectAvatarIcon = (index) => {
        this.setState({
            selectedAvatarIcon: index,
            //selectedAvailableIconIndex: null,
        })
    }
    onClickStart = () => {
        if (this.state.nickname.length >= 2) {
            //this.toggleNameIconModal()
            this.setState({ seeMoreIcons: true })
        } else {
            this.setState({ nicknameError: 'Minimum 2 characters' })
        }
    }
    onClickNicknameNext = () => {
        if (this.state.nickname.length >= 2) {
            //this.toggleNameIconModal()
            this.setState({ seeMoreIcons: true })
        } else {
            this.setState({ nicknameError: 'Minimum 2 characters' })
        }
    }

    onSend = (messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    NameIconModal = () => {
        const { isNameIconModalVisible, availableIcons, iconsGallery, seeMoreIcons, nickname, nicknameError, selectedAvailableIconIndex, selectedGallaryIcon, allIcons, selectedAvatarIcon } = this.state
        return (
            <Modal
                isVisible={isNameIconModalVisible}
                style={{ margin: 0, justifyContent: 'center' }}
                animationInTiming={constants.modalAnimationTiming}
                animationOutTiming={constants.modalAnimationTiming}
                //hideModalContentWhileAnimating={true}
                useNativeDriver={true}
            // backdropOpacity={0}
            >
                <View style={[AppStyles.cardView, { borderRadius: Metrics.modalRadius }]}>
                    {
                        !seeMoreIcons ?
                            <View>
                                <Spacer height={Metrics.baseMargin} />
                                <Text style={[AppStyles.textRegular, AppStyles.textCenter, { fontFamily: FontFamily.appTextMedium }]}>Hi! Time to select your nickname.</Text>
                                <Spacer height={Metrics.baseMargin} />
                                <Text style={[AppStyles.textRegular, AppStyles.textCenter, { fontFamily: FontFamily.appTextMedium }]}>Stay anonymous.</Text>
                                <InputWithTitleIcon
                                    title="NICKNAME"
                                    onChangeText={(text) => this.setState({ nickname: text })}
                                    error={nicknameError}
                                // placeholder="Mr. No Bullshit"
                                />
                                {/* <View style={[AppStyles.compContainer, { marginBottom: 0 }]}>
                                    <Text style={[AppStyles.textSmall]}>AVAILABLE ICONS</Text>
                                </View> */}
                                {/* <View style={[AppStyles.rowView, { flexWrap: 'wrap', justifyContent: 'space-between', marginHorizontal: width(2.5) }]}>
                                    {
                                        availableIcons.map((item, key) => {
                                            return (
                                                <Animatable.View
                                                    animation={key === selectedAvailableIconIndex ? 'bounceIn' : 'fadeIn'}
                                                >
                                                    <TouchableOpacity
                                                        activeOpacity={1}
                                                        onPress={() => this.onSelectAvailableIcon(key)}
                                                        style={[key === selectedAvailableIconIndex ? styles.selectedAvatarIconContainer : styles.avatarIconContainer, { backgroundColor: item.tintColor }]}>
                                                        <CustomIcon
                                                            icon={item.icon}
                                                            size={key === selectedAvailableIconIndex ? totalSize(5) : totalSize(3.5)}
                                                        />
                                                    </TouchableOpacity>
                                                    {
                                                        key === selectedAvailableIconIndex ?
                                                            <View style={[{ position: 'absolute', alignSelf: 'center', bottom: -totalSize(1.25) }]}>
                                                                <Icon
                                                                    name="checkbox-blank-circle"
                                                                    type="material-community"
                                                                    size={totalSize(1)}
                                                                    color={colors.appColor1}
                                                                />
                                                            </View>
                                                            :
                                                            null
                                                    }
                                                </Animatable.View>
                                            )
                                        })
                                    }
                                </View> */}

                                {/* <Spacer height={Metrics.baseMargin} />
                                <Text onPress={() => this.setState({ seeMoreIcons: true })} style={[AppStyles.textSmall, AppStyles.textPrimaryColor, AppStyles.textCenter, { textDecorationLine: 'underline' }]}>See more icons</Text> */}
                                <Spacer height={Metrics.baseMargin} />
                                <ButtonColored
                                    text="Next"
                                    //onPress={this.onClickStart}
                                    onPress={() => this.onClickNicknameNext()}
                                />
                                <Spacer height={Metrics.doubleBaseMargin} />
                            </View>
                            :
                            <View>
                                {/* <Spacer height={Metrics.baseMargin} />
                                <Text style={[AppStyles.textMedium, AppStyles.textMedium, AppStyles.textCenter]}>Hi! Time to select your nickname.</Text>
                                <Spacer height={Metrics.baseMargin} />
                                <Text style={[AppStyles.textMedium, AppStyles.textMedium, AppStyles.textCenter]}>Stay anonymous.</Text>
                                <InputWithTitleIcon
                                    title="NICKNAME"
                                // placeholder="Mr. No Bullshit"
                                /> */}
                                <View style={[AppStyles.compContainer, {}]}>
                                    <Text style={[AppStyles.textMedium]}>SELECT AN ICON</Text>
                                </View>
                                <View style={[AppStyles.rowView, { flexWrap: 'wrap', justifyContent: 'space-between', marginHorizontal: width(2.5) }]}>
                                    {
                                        allIcons.map((item, key) => {
                                            return (
                                                <Animatable.View
                                                    animation={key === selectedAvatarIcon ? 'bounceIn' : 'fadeIn'}
                                                >
                                                    <TouchableOpacity
                                                        activeOpacity={1}
                                                        onPress={() => this.onSelectAvatarIcon(key)}
                                                        style={[key === selectedAvatarIcon ? styles.selectedAvatarIconContainer : styles.avatarIconContainer, { backgroundColor: item.tintColor }]}>
                                                        <CustomIcon
                                                            icon={item.icon}
                                                            size={key === selectedAvatarIcon ? totalSize(5) : totalSize(3.5)}
                                                        />
                                                    </TouchableOpacity>
                                                    {
                                                        key === selectedAvatarIcon ?
                                                            <View style={[{ position: 'absolute', alignSelf: 'center', bottom: -totalSize(1.25) }]}>
                                                                <Icon
                                                                    name="checkbox-blank-circle"
                                                                    type="material-community"
                                                                    size={totalSize(1)}
                                                                    color={colors.appColor1}
                                                                />
                                                            </View>
                                                            :
                                                            null
                                                    }
                                                </Animatable.View>
                                            )
                                        })
                                    }
                                </View>
                                <Spacer height={Metrics.doubleBaseMargin} />
                                <ButtonColored
                                    text="Start"
                                    onPress={this.toggleNameIconModal}
                                />
                                <Spacer height={Metrics.doubleBaseMargin} />
                            </View>
                    }
                </View>
            </Modal>
        )
    }
    renderSend(props) {
        return (
            <Send
                {...props}
                containerStyle={{ borderWidth: 0, backgroundColor: 'transparent', justifyContent: 'center', paddingRight: width(2.5) }}
            >
                <Icon
                    name="send"
                    size={totalSize(2.5)}

                />
            </Send>
        );
    }
    renderInputToolbar(props) {
        return <InputToolbar {...props} containerStyle={styles.inputToolbar} />
    }
    renderActions(props) {
        return <Actions {...props}  >
            <Icon
                name="send"
                size={totalSize(2.5)}

            />
        </Actions>
    }
    micBtn = (sendProps) => {
        return (
            <View flexDirection='row' onTouchStart={messages => this.micBtnPressed(sendProps.messages)}>
                <TouchableOpacity style={styles.myStyle} activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://img.icons8.com/material-rounded/50/000000/microphone.png',
                        }}
                        style={styles.MicIconStyle}
                    />
                </TouchableOpacity>
            </View>
        );
    }
    micBtnPressed(messages = []) {
        //do something useful here
        console.log("Current Inputbox content: ", messages)
    }
    cameraBtn = (sendProps) => {
        return (
            <View style={[styles.cameraIconContainer]}>
                <Icon
                    name="ios-camera"
                    type="ionicon"
                    size={totalSize(3)}
                    color={colors.appTextColor5}
                />
            </View>
        );
    }
    onLongPress(context, message) {
        console.log(context, message);
        const options = ['Reply', 'Report', 'Cancel'];
        const cancelButtonIndex = options.length - 1;
        context.actionSheet().showActionSheetWithOptions({
            options,
            cancelButtonIndex
        }, (buttonIndex) => {
            switch (buttonIndex) {
                case 0:
                    // Your Reply logic
                    break;
                case 1:
                    // Your Report logic
                    break;
                case 2:
                    break;
            }
        });
    }
    renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                textStyle={{
                    right: {
                        //color: 'white',
                        //fontFamily: "CerebriSans-Book"
                        ...AppStyles.textSmall,
                        ...AppStyles.textGray
                    },
                    left: {
                        //color: 'white',
                        //fontFamily: "CerebriSans-Book"
                        ...AppStyles.textSmall,
                        ...AppStyles.textGray
                    },
                }}
                nameStyle={{
                    right: {
                        //color: 'white',
                        //fontFamily: "CerebriSans-Book"
                        ...AppStyles.textRegular,
                    },
                    left: {
                        //color: 'white',
                        //fontFamily: "CerebriSans-Book"
                        ...AppStyles.textRegular,
                    },
                }}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#c4e3fe',
                    },
                    right: {
                        backgroundColor: "#e8e8e8",
                    },
                }}
            >

            </Bubble>
        );
    }
    renderMessageText = (props) => {
        const {
            currentMessage,
        } = props;
        const { text: currText } = currentMessage;
        if (currText.indexOf(this.state.messages) === -1) {
            return <MessageText {...props} />;
        }
        return (
            <View style={styles.checkboxView}>
                <Text>Mr. No Bullshit</Text>
                <MessageText {...props} />
            </View>
        );
    };
    render() {
        const ThumbIconSize = totalSize(1.5)
        const ButtonThumbIconSize = totalSize(1.25)
        const { item } = this.props.route.params
        const { messages, vote } = this.state
        return (
            <ViewMain style={{ backgroundColor: Colors.appColor1 }}>
                <AppFooter>
                    {
                        item.up_votes && item.down_votes ?
                            <View style={[AppStyles.rowCompContainer]}>
                                <View style={[{ flex: 1.5, justifyContent: 'space-between' }, AppStyles.rowView]}>
                                    <IconWithText
                                        iconName="thumbs-down"
                                        iconType="feather"
                                        iconSize={ThumbIconSize}
                                        text={item.down_votes}
                                        textStyle={styles.votes}
                                    />
                                    <IconWithText
                                        iconName="thumbs-up"
                                        iconType="feather"
                                        iconSize={ThumbIconSize}
                                        text={item.up_votes}
                                        textStyle={styles.votes}
                                    />
                                </View>
                                <Spacer width={width(15)} />
                                <View style={[{ flex: 2, justifyContent: 'space-between' }, AppStyles.rowView]}>
                                    <ButtonBorderedSmall
                                        text="Disagree"
                                        iconName="thumbs-down"
                                        iconType="feather"
                                        iconSize={ButtonThumbIconSize}
                                        tintColor={vote === 'disagree' ? Colors.appTextColor6 : Colors.appTextColor4}
                                        textStyle={styles.voteButtonText}
                                        buttonStyle={[styles.voteButton, vote === 'disagree' ? styles.voteButtonActive : null]}
                                        onPress={() => this.setState({ vote: 'disagree' })}
                                    />
                                    <ButtonBorderedSmall
                                        text="  UpVote  "
                                        iconName="thumbs-up"
                                        iconType="feather"
                                        iconSize={ButtonThumbIconSize}
                                        tintColor={vote === 'upVote' ? Colors.appTextColor6 : Colors.appTextColor4}
                                        textStyle={styles.voteButtonText}
                                        buttonStyle={[styles.voteButton, vote === 'upVote' ? styles.voteButtonActive : null]}
                                        onPress={() => this.setState({ vote: 'upVote' })}
                                    />
                                </View>
                            </View>
                            :
                            null
                    }
                    <View style={[{ flex: 1, backgroundColor: Colors.silver, borderTopStartRadius: item.up_votes && item.down_votes ? 0 : 15, borderTopEndRadius: item.up_votes && item.down_votes ? 0 : 15 }, AppStyles.shadow]}>
                        <GiftedChat
                            messages={messages}
                            //  onSend={messages => onSend(messages)}
                            user={{
                                _id: 1,
                            }}
                            showUserAvatar
                            placeholder="Message"
                            minInputToolbarHeight={height(10)}
                            renderUsernameOnMessage={true}
                            // showAvatarForEveryMessage={false}
                            // minComposerHeight={height(6)}
                            textInputStyle={styles.textInput}
                            renderInputToolbar={this.renderInputToolbar}
                            alwaysShowSend={true}
                            renderSend={this.renderSend}
                            //renderActions={this.renderActions}
                            //renderActions={messages => this.micBtn(messages)}
                            renderActions={() => this.cameraBtn()}
                            onLongPress={this.onLongPress}
                            renderBubble={this.renderBubble}
                            renderAvatarOnTop
                        // renderMessageText={(props)=>this.renderMessageText(props)}
                        />
                    </View>
                </AppFooter>
                <this.NameIconModal />
            </ViewMain>
        );
    }
}

export default ChatScreen;


const styles = StyleSheet.create({
    avatarIconContainer: {
        height: totalSize(6),
        width: totalSize(6),
        borderRadius: 100,
        marginTop: height(2.5),
        marginHorizontal: width(2.5),
        ...AppStyles.center
    },
    selectedAvatarIconContainer: {
        height: totalSize(7.5),
        width: totalSize(7.5),
        borderRadius: 100,
        marginTop: height(2.5),
        marginHorizontal: width(2.5),
        ...AppStyles.center
    },
    voteButton: {
        // paddingHorizontal: width(1.5),
        paddingRight: width(2),
        paddingLeft: 0,
        paddingVertical: height(0.75)
    },
    voteButtonText: {
        fontSize: FontSize.tiny
    },
    voteButtonActive: {
        backgroundColor: Colors.appBgColor4 + 'BF'
    },
    inputToolbar: {
        // marginLeft: 15,
        //marginRight: 15,
        //marginBottom: 10,
        //borderWidth: 0.5,
        borderColor: 'grey',
        paddingVertical: height(2)
        //borderRadius: 25
    },
    textInput: {
        backgroundColor: Colors.appBgColor2,
        marginHorizontal: width(2.5),
        borderRadius: 25,
        fontSize: FontSize.medium,
        paddingHorizontal: width(5),
        // height:height(6)

    },
    votes: {
        ...AppStyles.textSmall,
        color: Colors.appTextColor3,
        fontFamily: FontFamily.appTextMedium

    },
    myStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: 35,
        borderRadius: 5,
        margin: 5,
    },
    MicIconStyle: {
        padding: 5,
        marginRight: 10,
        height: 35,
        width: 35,
        resizeMode: 'contain',
    },
    cameraIconContainer: {
        //flexDirection: 'row',
        // backgroundColor: '#485a96',
        // borderWidth: 0.5,
        //borderColor: '#fff',
        height: 40,
        width: 35,
        //borderRadius: 5,
        marginBottom: 5,
        marginLeft: 5,
        ...AppStyles.center
    },
    MicIconStyle: {
        padding: 5,
        marginRight: 10,
        height: 35,
        width: 35,
        resizeMode: 'contain',
    },
})