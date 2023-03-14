import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { ViewMain, AppFooter, IconWithText, LogoRed, Logo, ChatItem, Spacer, ButtonColored, CustomText, CustomIcon, ButtonBordered, InputWithTitleIcon, CloseIcon } from '../../../Components';
import { Colors, AppStyles, FontFamily, FontSize, Metrics, Icons } from '../../../Themes';
import { Icon } from 'react-native-elements';
import { totalSize, width, height } from 'react-native-dimension';
import * as Animatable from 'react-native-animatable'
import Modal from 'react-native-modal'
import { constants } from '../../../Stores';
class NewTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCategoryModalVisible: false,
      isTopicModalVisible: false,
      title: '',
      tilteError: '',
      categories_list: [
        {
          title: 'Office, Facilities & Equipment',
          icon: Icons.Office,
          tintColor: '#697dec'
        },
        {
          title: 'Work-Life Balance',
          icon: Icons.Scales,
          tintColor: '#56cb95'
        },
        {
          title: 'Work-Legal Issues',
          icon: Icons.Law,
          tintColor: '#e39934'
        },

        {
          title: 'Compensation & Pension',
          icon: Icons.coins,
          tintColor: '#e39934'
        },
        {
          title: 'Gossip / Secret Update I Know',
          icon: Icons.Listening,
          tintColor: '#7546da'
        },
        {
          title: 'Harassment & Bullying',
          icon: Icons.Loser,
          tintColor: '#e24f4d'
        },

        {
          title: 'Racism & Discrimination',
          icon: Icons.Racism,
          tintColor: '#3373f8'
        },
        {
          title: 'Company Strategy',
          icon: Icons.VisualizationSkill,
          tintColor: '#e24f4d'
        },
        {
          title: 'Positive Feedbacks',
          icon: Icons.FacebookLike,
          tintColor: '#540b55'
        },

      ],
      chatInfo: {
        title: 'No Veggie food in happy hours',
        created: '2 minuts ago',
        up_votes: '0',
        down_votes: '0',
        new_message: null,
        last_message: ''
      },
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
  toggleCategoryModal = () => this.setState({ isCategoryModalVisible: !this.state.isCategoryModalVisible })
  toggleTopicModal = () => this.setState({ isTopicModalVisible: !this.state.isTopicModalVisible })
  componentDidMount = () => {
    setTimeout(() => {
      this.toggleCategoryModal();
    }, 10);
    // this.toggleCategoryModal();
  }

  onCategoryNext = () => {
    this.toggleCategoryModal();
    Platform.OS === 'android' ?
      this.toggleTopicModal()
      :
      setTimeout(() => {
        this.toggleTopicModal();
      }, 1100);
  }
  onTitleNext = () => {
    const { title, tilteError, chatInfo } = this.state
    const { navigation } = this.props
    if (title.length >= 2) {
      this.toggleTopicModal()
      navigation.replace('chatScreen1', { item: chatInfo })
    } else {
      this.setState({ tilteError: 'Topic should be at least 2 characters long' })
    }

  }
  CategoryModal = ({ }) => {
    const { categories_list, isCategoryModalVisible } = this.state
    const { navigation } = this.props
    const { goBack } = navigation
    return (
      <Modal
        isVisible={isCategoryModalVisible}
        transparent
        style={{ marginHorizontal: 0 }}
        animationType="slide"
        useNativeDriver={true}
        onBackButtonPress={() => { this.toggleCategoryModal(); goBack() }}
        backdropColor='transparent'
        animationInTiming={constants.modalAnimationTiming}
        animationOutTiming={constants.modalAnimationTiming}

      >
        <View style={[AppStyles.cardView, { borderRadius: Metrics.modalRadius }]}>

          <Spacer height={Metrics.marginTop} />
          <Text style={[AppStyles.textMedium, AppStyles.textCenter, AppStyles.textMedium]}>Select a discussion category</Text>
          <Spacer height={Metrics.marginBottom} />
          <FlatList
            data={categories_list}
            numColumns={3}
            style={{ marginHorizontal: width(2.5) }}
            renderItem={({ item, index }) => {
              return (
                <View style={[{ flex: 1, paddingHorizontal: width(2.5), paddingVertical: height(1), backgroundColor: 'transparent' }]}>
                  <TouchableOpacity onPress={this.onCategoryNext} style={[{ borderWidth: 1, borderColor: item.tintColor, borderRadius: 10, paddingVertical: height(3) }, AppStyles.center]}>
                    <CustomIcon
                      icon={item.icon}
                      size={totalSize(3.5)}
                    />
                  </TouchableOpacity>
                  <Spacer height={Metrics.smallMargin} />
                  <Text style={[AppStyles.textSmall, AppStyles.textLightGray, AppStyles.textCenter]}>{item.title}</Text>
                </View>
              )
            }}
          />
          <Spacer height={Metrics.marginTop} />
          <ButtonBordered
            text="Other"
            //onPress={() => {this.toggleCategoryModal();this.props.navigation.goBack()}}
            onPress={this.onCategoryNext}
          />
          <Spacer height={Metrics.marginTop} />
          {/* <ButtonColored
            text="Next"
            onPress={this.onCategoryNext}
          /> */}
          <Spacer height={Metrics.marginTop} />
          <View style={[{ position: 'absolute', top: Metrics.marginTop, right: Metrics.smallMargin }]}>
            <CloseIcon
              onPress={() => { this.toggleCategoryModal(); this.props.navigation.goBack() }}
            />
          </View>
        </View>
      </Modal>
    )
  }
  TopicModal = ({ }) => {
    const { isTopicModalVisible, title, tilteError } = this.state
    const { navigation } = this.props
    const { goBack } = navigation
    return (
      <Modal
        isVisible={isTopicModalVisible}
        onBackButtonPress={() => { this.toggleTopicModal(); goBack() }}
        //transparent
        // animationType="slide"
        style={{ marginHorizontal: 0 }}
        useNativeDriver={true}
        backdropColor='transparent'
        animationInTiming={constants.modalAnimationTiming}
        animationOutTiming={constants.modalAnimationTiming}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={[AppStyles.cardView, { borderRadius: Metrics.modalRadius }]}>
            <Spacer height={Metrics.marginTop} />
            <Text style={[AppStyles.textMedium, AppStyles.textCenter, AppStyles.textMedium]}>What is your discussion topic?</Text>
            <Spacer height={Metrics.marginBottom} />
            <InputWithTitleIcon
              title="Title"
              onChangeText={(text) => this.setState({ title: text })}
              error={tilteError}
            />
            <Spacer height={Metrics.marginTop} />
            <ButtonColored
              text="Next"
              onPress={this.onTitleNext}
            />
            <Spacer height={Metrics.doubleBaseMargin} />
            <View style={[{ position: 'absolute', top: Metrics.marginTop, right: Metrics.smallMargin }]}>
              <CloseIcon
                onPress={() => {
                  this.toggleTopicModal();
                  goBack()
                  // setTimeout(() => {
                  //   this.toggleCategoryModal()
                  // }, 1050);
                }
                }
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
  render() {
    return (
      <View style={[{ flex: 1 }]}>
        <this.CategoryModal />
        <this.TopicModal />
      </View>
    );
  }
}

export default NewTopic;
