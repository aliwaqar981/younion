import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../Themes';
import {width, height} from 'react-native-dimension';
import {Splash} from '../Containers/Splash';
import {Onboarding} from '../Containers/Onboarding';
import {AuthNavigator, AppNavigator} from '.';
import {Text} from 'react-native-elements';

const MainStack = createStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true,
    };
  }

  componentDidMount = () =>
    setTimeout(() => {
      this.setState({is_loading: !this.state.is_loading});
    }, 3000);
  render() {
    if (this.state.is_loading) {
      return <Splash />;
    }
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.appColor1}}>
        <View
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 0,
            height: height(10),
            backgroundColor: Colors.appBgColor1,
          }}
        />
        <StatusBar
          backgroundColor={Colors.appColor1}
          // translucent={true}
          barStyle="light-content"
        />
        <NavigationContainer>
          <MainStack.Navigator
          //initialRouteName="App"
          >
            <MainStack.Screen
              name="onboarding"
              component={Onboarding}
              options={{headerShown: false}}
            />
            <MainStack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{headerShown: false}}
            />
            <MainStack.Screen
              name="App"
              component={AppNavigator}
              options={{headerShown: false}}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  menuIconStyle: {
    marginHorizontal: width(3),
  },
});
