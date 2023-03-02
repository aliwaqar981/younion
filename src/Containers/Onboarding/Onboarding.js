import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import {AppStyles, Metrics, Colors, Images, FontFamily} from '../../Themes';
import {
  AuthFooter,
  AuthHeader,
  ViewMain,
  CustomIcon,
  Spacer,
  ButtonColored,
} from '../../Components';
import Swiper from 'react-native-swiper';
import {totalSize, height, width} from 'react-native-dimension';

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiper_data: [
        {
          image: Images.speak,
          description: 'gives you a voice in \n your workplace',
        },
        {
          image: Images.unknown,
          description: 'You are anonymous, so feel free to \n speak your mind',
        },
        {
          image: Images.views,
          description: 'We encourage positive and \n negative feedbacks',
        },
        {
          image: Images.group,
          description: 'We believe workplaces should be \n fair and pleasant',
        },
      ],
      selected_index: 0,
    };
  }

  renderSwiper = () => {
    const {swiper_data, selected_index} = this.state;
    return (
      <Swiper
        onIndexChanged={index => {
          this.setState({selected_index: index});
        }}
        dotStyle={{height: totalSize(1), width: totalSize(1)}}
        activeDotStyle={{height: totalSize(1), width: totalSize(1)}}
        dotColor={Colors.appColor2 + '40'}
        activeDotColor={Colors.appColor2}
        loop={false}
        ref={e => (this.swiper = e)}>
        {swiper_data.map((item, key) => {
          return (
            <View style={{flex: 1}}>
              <Spacer height={Metrics.doubleBaseMargin} />
              <View style={AppStyles.center}>
                <CustomIcon icon={item.image} size={totalSize(30)} />
              </View>
              <Spacer height={Metrics.doubleBaseMargin} />
              <Text style={styles.info}>
                {key === 0 ? '  ' : null}
                {key === 0 ? (
                  <Image
                    source={Images.logo_red3x}
                    resizeMode="contain"
                    style={{height: totalSize(1.5), width: totalSize(9)}}
                  />
                ) : null}
                {key === 0 ? ' ' : null}
                {item.description}
              </Text>
              <Spacer height={Metrics.baseMargin} />
              {/* <ButtonColored
                  text={selected_index === swiper_data.length - 1 ? 'Get Started' : 'Next'}
                  onPress={() => this.swiper.scrollBy(1)}
                /> */}
            </View>
          );
        })}
      </Swiper>
    );
  };
  render() {
    const {swiper_data, selected_index} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <ViewMain style={[AppStyles.mainContainerRed]}>
        <AuthHeader />
        <AuthFooter>
          <this.renderSwiper />
          <View style={{position: 'absolute', bottom: 0, right: 0, left: 0}}>
            <ButtonColored
              text={
                selected_index === swiper_data.length - 1
                  ? 'Get Started'
                  : 'Next'
              }
              onPress={
                selected_index < swiper_data.length - 1
                  ? () => this.swiper.scrollBy(1)
                  : () => navigate('Auth')
              }
              buttonStyle={{marginHorizontal: width(10)}}
            />
            <Spacer height={Metrics.doubleBaseMargin * 2} />
          </View>
          {selected_index < swiper_data.length - 1 ? (
            <View
              style={{
                position: 'absolute',
                bottom: Metrics.baseMargin,
                right: Metrics.baseMargin,
              }}>
              <Text
                onPress={() => navigate('Auth')}
                style={[AppStyles.textSmall, AppStyles.textGray]}>
                Skip
              </Text>
            </View>
          ) : null}
        </AuthFooter>
      </ViewMain>
    );
  }
}

export default Onboarding;

const styles = StyleSheet.create({
  info: {
    ...AppStyles.textRegular,
    fontFamily: FontFamily.appTextMedium,
    ...AppStyles.textCenter,
    marginHorizontal: width(10),
    color: Colors.appTextColor3,
    lineHeight: totalSize(2.5),
    // ...AppStyles.center
  },
});
