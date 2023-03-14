import React, {Component} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, AppStyles, Header} from '../Themes';
import {Icon} from 'react-native-elements';
import {
  Faq,
  NewTopic,
  Chats,
  Profile,
  ChatScreen,
  Managment,
  ChatScreen1,
} from '../Containers/MainFlow';
import {HeaderBackIcon} from '../Components';
import {Splash} from '../Containers/Splash';
import {Onboarding} from '../Containers/Onboarding';
import {AuthNavigator} from '.';
const HeaderTintColor = Colors.appColor1;

const MainStack = createStackNavigator();
const AppStack = createStackNavigator();
const FaqStack = createStackNavigator();
const NewTopicStack = createStackNavigator();
const ChatsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FaqStackScreens = () => {
  return (
    <FaqStack.Navigator screenOptions={({navigation}) => Header.screenOptions}>
      <FaqStack.Screen
        name="faq"
        component={Faq}
        options={({navigation}) => ({
          title: 'Frequently Asked Questions',
        })}
      />
    </FaqStack.Navigator>
  );
};

const NewTopicStackScreens = () => {
  return (
    <NewTopicStack.Navigator
      screenOptions={({navigation}) => Header.screenOptions}>
      <NewTopicStack.Screen
        name="newTopic"
        component={NewTopic}
        options={({navigation}) => ({})}
      />
    </NewTopicStack.Navigator>
  );
};

const ChatsStackScreens = () => {
  return (
    <ChatsStack.Navigator
      screenOptions={({navigation}) => Header.screenOptions}>
      <ChatsStack.Screen
        name="chats"
        component={Chats}
        options={({navigation}) => ({})}
      />
    </ChatsStack.Navigator>
  );
};
const ProfileStackScreens = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={({navigation}) => Header.screenOptions}>
      <ProfileStack.Screen
        name="profile"
        component={Profile}
        options={({navigation}) => ({
          // headerLeft: () => <MenuIcon style={styles.menuIconStyle} onPress={() => navigation.toggleDrawer()} />
        })}
      />
    </ProfileStack.Navigator>
  );
};

class TabScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            //showLabel: false,
            activeTintColor: Colors.appColor1,
            inactiveTintColor: Colors.appTextColor5,
            allowFontScaling: true,
            style: AppStyles.tabBarStyle,
          }}
          initialRouteName="Chats">
          <Tab.Screen
            name="Faq"
            component={FaqStackScreens}
            options={() => ({
              tabBarLabel: 'FAQ',
              tabBarIcon: ({color, size}) => {
                return (
                  <Icon
                    name="information"
                    type="material-community"
                    size={size}
                    color={color}
                  />
                );
              },
            })}
          />
          <Tab.Screen
            name="NewTopic"
            //component={NewTopicStackScreens}
            component={() => null}
            options={() => ({
              tabBarLabel: 'New Topic',
              tabBarIcon: ({color, size}) => {
                return (
                  <Icon
                    name="plus-circle"
                    type="material-community"
                    size={size}
                    color={color}
                  />
                );
              },
            })}
            listeners={({navigation}) => ({
              tabPress: event => {
                event.preventDefault();
                navigation.navigate('newTopic');
              },
            })}
          />
          <Tab.Screen
            name="Chats"
            component={ChatsStackScreens}
            options={() => ({
              tabBarLabel: 'Chats',
              tabBarIcon: ({color, size}) => {
                return (
                  <Icon
                    name="comment-multiple"
                    type="material-community"
                    size={size}
                    color={color}
                  />
                );
              },
            })}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreens}
            options={() => ({
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => {
                return (
                  <Icon name="user" type="entypo" size={size} color={color} />
                );
              },
            })}
          />
        </Tab.Navigator>
      </View>
    );
  }
}

export default class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <AppStack.Navigator
          screenOptions={({navigation}) => ({
            title: '',
            headerTitleAlign: 'left',
            headerStyle: AppStyles.headerStyle,
            headerTitleStyle: AppStyles.headerTitleStyle,
            headerTintColor: HeaderTintColor,
            headerBackImage: () => <HeaderBackIcon />,
            animationEnabled: false,
          })}
          mode="modal">
          <AppStack.Screen
            name="tab"
            component={TabScreens}
            options={({navigation}) => ({
              headerShown: false,
            })}
          />
          <AppStack.Screen
            name="chatScreen"
            component={ChatScreen}
            options={({navigation}) => (
              Header.screenOptions,
              {
                animationEnabled: true,
              }
            )}
          />
          <AppStack.Screen
            name="chatScreen1"
            component={ChatScreen1}
            options={({navigation}) => (
              Header.screenOptions,
              {
                animationEnabled: true,
              }
            )}
          />
          <AppStack.Screen
            name="newTopic"
            component={NewTopic}
            options={({navigation}) => (
              Header.screenOptions,
              {
                //headerShown:false,
                animationEnabled: true,
                cardStyle: {backgroundColor: '#00000080'},
                cardOverlayEnabled: true,
                cardStyleInterpolator: ({current: {progress}}) => {
                  return {
                    cardStyle: {
                      opacity: progress.interpolate({
                        inputRange: [0, 0.5, 0.9, 1],
                        outputRange: [0, 0.25, 0.7, 1],
                      }),
                    },
                    overlayStyle: {
                      opacity: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 0.5],
                        extrapolate: 'clamp',
                      }),
                    },
                  };
                },
              }
            )}
          />
          <AppStack.Screen
            name="managment"
            component={Managment}
            options={({navigation}) => (
              Header.screenOptions,
              {
                //headerShown:false,
                animationEnabled: true,
                cardStyle: {backgroundColor: '#00000080'},
                cardOverlayEnabled: true,
                cardStyleInterpolator: ({current: {progress}}) => {
                  return {
                    cardStyle: {
                      opacity: progress.interpolate({
                        inputRange: [0, 0.5, 0.9, 1],
                        outputRange: [0, 0.25, 0.7, 1],
                      }),
                    },
                    overlayStyle: {
                      opacity: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 0.5],
                        extrapolate: 'clamp',
                      }),
                    },
                  };
                },
              }
            )}
          />
        </AppStack.Navigator>
      </View>
    );
  }
}
