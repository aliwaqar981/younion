import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppStyles, FontFamily, FontSize, Metrics, Colors } from '../Themes';
import { IconWithText, Spacer, LineHorizontal } from '.';
import { totalSize, width, height } from 'react-native-dimension';

class ChatItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const ThumbIconSize = totalSize(1.5)
        const { title, created, upVotes,hideLine,lineStyle, downVotes, onPress, containerStyle, votes, newMessage,lastMessage } = this.props
        return (
            <TouchableOpacity  activeOpacity={1}  onPress={onPress} style={[{},containerStyle]}>
                <View style={[AppStyles.rowCompContainer]}>
                    <View style={{ flex: 8 }}>
                        <Text style={[AppStyles.textRegular, { fontFamily: FontFamily.appTextMedium }]}>{title}</Text>
                        <Spacer height={Metrics.smallMargin} />
                       {
                           lastMessage?
                           <Text style={[AppStyles.textSmall, AppStyles.textLightGray, {}]}>{lastMessage}</Text>
                           :
                           <Text style={[AppStyles.textSmall, AppStyles.textLightGray, {}]}>Created {created}</Text>
                       }
                        <Spacer height={Metrics.smallMargin} />
                        {
                            votes ?
                                <View style={[AppStyles.rowView]}>
                                    <IconWithText
                                        iconName="thumbs-down"
                                        iconType="feather"
                                        iconSize={ThumbIconSize}
                                        text={downVotes}
                                        textStyle={{ fontSize: FontSize.medium }}
                                    />
                                    <Spacer width={Metrics.doubleBaseMargin} />
                                    <IconWithText
                                        iconName="thumbs-up"
                                        iconType="feather"
                                        iconSize={ThumbIconSize}
                                        text={upVotes}
                                        textStyle={{ fontSize: FontSize.medium }}
                                    />
                                </View>
                                :
                                null
                        }
                    </View>
                    <View style={{ flex: 2,alignItems:'flex-end' }}>
                        {
                            newMessage ?
                                <View style={[{ height: totalSize(3.5), width: totalSize(3.5), borderRadius: 100, backgroundColor: Colors.appColor2 }, AppStyles.center]}>
                                    <Text style={[AppStyles.textMedium]}>{newMessage}</Text>
                                </View>
                                :
                                null
                        }
                    </View>
                </View>
              {
                  hideLine?
                  null
                  :
                  <LineHorizontal
                  height={height(1.5)}
                  style={lineStyle}
              />
              }
            </TouchableOpacity>
        );
    }
}

export default ChatItem;
