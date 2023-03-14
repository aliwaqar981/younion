import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AppStyles, Metrics, Colors} from '../Themes';
import {
  ChatUserImage,
  Spacer,
  ButtonColored,
  IconWithText,
  LineHorizontal,
} from '.';
import {totalSize, width, height} from 'react-native-dimension';
import Tooltip from 'react-native-walkthrough-tooltip';

class ChatMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageBubbleWidth: null,
    };
  }

  measureView(event) {
    console.warn('event properties: ', event);
    console.warn('width: ', event.nativeEvent.layout.width);
    this.setState({messageBubbleWidth: event.nativeEvent.layout.width});
  }
  render() {
    const {
      userImage,
      containerStyle,
      message,
      userName,
      myMessage,
      isMenuVisible,
      onPressReply,
      onPressReport,
      onPressMessage,
      onLongPressMessage,
      onTooltipBackdropPress,
      reply,
    } = this.props;
    const {messageBubbleWidth} = this.state;
    return (
      <View
        style={[
          AppStyles.rowCompContainer,
          {
            flexDirection: !myMessage ? 'row' : 'row-reverse',
            alignItems: 'flex-start',
            marginTop: 0,
          },
          containerStyle,
        ]}>
        <View
          style={{
            flex: 1.25,
            alignItems: !myMessage ? 'flex-start' : 'flex-end',
          }}>
          <ChatUserImage source={{uri: userImage}} size={totalSize(3.5)} />
        </View>

        <View style={{flex: 6.75}} onLayout={event => this.measureView(event)}>
          <Tooltip
            isVisible={isMenuVisible}
            // backgroundColor={'red'}
            backgroundColor={Colors.appTextColor1 + '80'}
            onClose={onTooltipBackdropPress}
            disableShadow={true}
            displayInsets={{
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              padding: 0,
              margin: 0,
            }}
            content={
              <View style={[{}]}>
                <View>
                  <IconWithText
                    text="Reply"
                    iconName="reply"
                    tintColor={Colors.appTextColor4}
                    onPress={onPressReply}
                  />
                  <LineHorizontal
                    style={{marginHorizontal: 0, marginVertical: height(0.5)}}
                  />
                  <IconWithText
                    text="Report"
                    iconName="alert-circle-outline"
                    //iconType="ionicon"
                    tintColor={Colors.appTextColor4}
                    onPress={onPressReport}
                  />
                </View>
              </View>
            }
            placement="top"
            // onClose={this.toggleToolTip}
          >
            <TouchableOpacity
              onPress={onPressMessage}
              activeOpacity={1}
              onLongPress={onLongPressMessage}
              style={{
                flex: 1,
                width: messageBubbleWidth,
                borderRadius: 10,
                backgroundColor: !myMessage ? '#c4e3fe' : '#e8e8e8',
              }}>
              {reply ? (
                <View
                  style={{
                    backgroundColor: Colors.appBgColor3,
                    padding: totalSize(1),
                    borderTopRightRadius: 10,
                    borderLeftWidth: 2.5,
                    borderLeftColor: 'lightgreen',
                  }}>
                  <Text
                    style={[AppStyles.textSmall, {fontSize: totalSize(1.4)}]}>
                    {reply.user.name}
                  </Text>
                  <Spacer height={Metrics.tinyMargin} />
                  <Text style={[AppStyles.textSmall, AppStyles.textGray]}>
                    {reply.text}
                  </Text>
                </View>
              ) : null}
              <View style={{padding: totalSize(1)}}>
                <Text style={[AppStyles.textSmall, {fontSize: totalSize(1.4)}]}>
                  {userName}
                </Text>
                <Spacer height={Metrics.tinyMargin} />
                <Text
                  style={[
                    AppStyles.textMedium,
                    AppStyles.textGray,
                    {lineHeight: totalSize(1.8)},
                  ]}>
                  {message}
                </Text>
              </View>
            </TouchableOpacity>
          </Tooltip>
        </View>
        <View style={{flex: 2}} />
      </View>
    );
  }
}

export default ChatMessage;
