import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {AppStyles, Metrics} from '../../Themes';
import {
  AuthHeader,
  AuthFooter,
  InputWithTitleIcon,
  Title,
  Spacer,
  ButtonColored,
} from '../../Components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {CommonActions} from '@react-navigation/native';
import {validations} from '../../Stores';
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_secured: true,
      emailError: null,
      passwordError: null,
    };
  }

  validation = () => {
    const {email, password} = this.state;
    !email
      ? this.setState({emailError: 'Email is required'})
      : !validations.validateEmail(email)
      ? this.setState({emailError: 'Invalid email'})
      : this.setState({emailError: null});
    !password
      ? this.setState({passwordError: 'Password is required'})
      : password.length < 6
      ? this.setState({
          passwordError: 'Password should be at least 6 characters',
        })
      : this.setState({passwordError: null});
    if (validations.validateEmail(email) && password.length >= 6) {
      return true;
    } else {
      return false;
    }
  };

  onSignin = () => {
    const {navigation} = this.props;
    console.log(this.validation());
    this.validation()
      ? navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'App'}],
          }),
        )
      : null;
  };
  render() {
    const {email, password, password_secured, emailError, passwordError} =
      this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={[AppStyles.mainContainerRed]}>
        <AuthHeader />
        <AuthFooter>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <Title text="Sign In" />
            <InputWithTitleIcon
              title="EMAIL"
              placeholder="myname@company.com"
              onChangeText={text => this.setState({email: text})}
              value={email}
              error={emailError}
            />

            <InputWithTitleIcon
              title="PASSWORD"
              placeholder="****************"
              onChangeText={text => this.setState({password: text})}
              value={password}
              rightIconName={!password_secured ? 'eye' : 'eye-off'}
              secureTextEntry={password_secured}
              onPressRightIcon={() =>
                this.setState({password_secured: !password_secured})
              }
              error={passwordError}
            />
            <Spacer height={Metrics.baseMargin} />
            <ButtonColored text="Sign In" onPress={() => this.onSignin()} />
            <Spacer height={Metrics.baseMargin} />
            <Text
              onPress={() => navigate('signup')}
              style={[
                AppStyles.textSmall,
                AppStyles.textGray,
                AppStyles.textCenter,
              ]}>
              Don’t have an account? Sign Up
            </Text>
          </KeyboardAwareScrollView>
        </AuthFooter>
      </View>
    );
  }
}

export default Signin;
