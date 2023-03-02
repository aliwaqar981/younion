import React, {Component} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {AppStyles, Colors} from '../../Themes';
import {Logo} from '../../Components';
import {height} from 'react-native-dimension';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.appColor1}}>
        <StatusBar
          backgroundColor={Colors.appColor1}
          // translucent={true}
          barStyle="light-content"
        />
        <View style={[AppStyles.mainContainerRed, AppStyles.center]}>
          <Logo height={height(5)} animation={'fadeIn'} duration={1500} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
