import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppStyles, Metrics, Colors, Images, FontFamily } from '../../Themes';
import { AuthHeader, AuthFooter, InputWithTitleIcon, Title, Spacer, ButtonColored, LogoRed, CustomText, RowView, IconWithText, CustomIcon, ModalPicker, ButtonBordered, CustomPicker, } from '../../Components';
import * as Animatable from 'react-native-animatable'
import { width, height, totalSize } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { CheckBox } from 'react-native-elements';
import { validations } from '../../Stores';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password_secured: true,
      current_step: 'signup',
      companyEmail: '',
      code: '',
      privateEmail: '',
      password: '',
      companyEmailError: null,
      codeError: null,
      privateEmailError: null,
      passwordError: null,
      acceptPrivacyPolicy: false,
      managerName: '',
      managerEmail: '',
      selectedManagerTitle: '',
      managerTitles: [
        {
          label: 'CEO',
          value: 'CEO'
        },
        {
          label: 'C-Level',
          value: 'C-Level'
        },
        {
          label: 'VP',
          value: 'VP'
        },
        {
          label: 'Director/Head of',
          value: 'Director/Head of'
        }
      ]
    };
  }


  SignupValidation = () => {
    const { companyEmail } = this.state
    !companyEmail ? this.setState({ companyEmailError: 'Company email is required' }) : !validations.validateEmail(companyEmail) ? this.setState({ companyEmailError: 'Company email only' }) : this.setState({ emailError: null });
    if (validations.validateEmail(companyEmail)) { return true } else { return false }

  }

  onSignup = () => {
    console.log(this.SignupValidation())
    this.SignupValidation() ? this.setState({ current_step: 'checkEmail' }) : null
  }
  CheckEmailValidation = () => {
    const { code } = this.state
    !code ? this.setState({ codeError: 'Code is required' }) : this.setState({ codeError: null });
    if (code) { return true } else { return false }

  }

  onCheckEmail = () => {
    console.log(this.CheckEmailValidation())
    this.CheckEmailValidation() ? this.setState({ current_step: 'completeRegistration' }) : null
  }

  CompleteRgistrationValidation = () => {
    const { privateEmail, password } = this.state
    !privateEmail ? this.setState({ privateEmailError: 'Private email is required' }) : !validations.validateEmail(privateEmail) ? this.setState({ privateEmailError: 'Invalid email' }) : this.setState({ privateEmailError: null });
    !password ? this.setState({ passwordError: 'Password is required' }) : password.length < 6 ? this.setState({ passwordError: 'Password should be at least 6 characters' }) : this.setState({ passwordError: null })
    if (password.length >= 6 && validations.validateEmail(privateEmail)) {
      return true
    } else {
      return false
    }

  }

  onCompeletRegistration = () => {
    console.log(this.CompleteRgistrationValidation())
    this.CompleteRgistrationValidation() ? this.setState({ current_step: 'registrationDone' }) : null
  }

  onGetStarted = () => {
    this.setState({ current_step: 'aboutManager' })
  }
  onAddAnother = () => {
    this.setState({
      managerName: '',
      managerEmail: '',
      selectedManagerTitle: '',
    })
  }
  onFinalize = () => {
    this.props.navigation.navigate('App')
  }

  render() {
    const { password_secured, current_step, companyEmail, code, privateEmail, password, companyEmailError, codeError, privateEmailError, passwordError, acceptPrivacyPolicy, selectedManagerTitle, managerTitles, managerName, managerEmail } = this.state
    const { navigate } = this.props.navigation
    return (
      <View style={[AppStyles.mainContainerRed]}>
        <AuthHeader />
        <AuthFooter
        //animation={current_step === 'checkEmail' ? 'fadeInUp' : current_step === 'registrationComplete' ? 'fadeInUp' : ''}
        >
          <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
            {
              current_step === 'signup' ?
                <View style={{ flex: 1 }}>
                  <Title
                    text="Sign Up"
                  />
                  <InputWithTitleIcon
                    title="COMPANY EMAIL"
                    placeholder="myname@company.com"
                    onChangeText={(text) => this.setState({ companyEmail: text })}
                    value={companyEmail}
                    error={companyEmailError}
                  />
                  <Spacer height={Metrics.baseMargin} />
                  <ButtonColored
                    text="Next"
                    //onPress={() => navigate('checkEmail')}
                    //onPress={() => this.setState({ current_step: 'checkEmail' })}
                    onPress={() => this.onSignup()}
                  />
                  <Spacer height={Metrics.doubleBaseMargin} />
                  <Text onPress={() => navigate('signin')} style={[AppStyles.textSmall, AppStyles.textGray, AppStyles.textCenter]}>
                    Already have an account? Sign In
             </Text>
                </View>
                :
                current_step === 'checkEmail' ?
                  <View style={{ flex: 1 }}>
                    <Title
                      text="Check your Email"
                    />
                    <InputWithTitleIcon
                      title="ADD CODE"
                      placeholder="Add 6 digit code here"
                      onChangeText={(text) => this.setState({ code: text })}
                      value={code}
                      error={codeError}
                    />
                    <Spacer height={Metrics.baseMargin} />
                    <ButtonColored
                      text="Next"
                      // onPress={() => navigate('completeRegistration')}
                      //onPress={() => this.setState({ current_step: 'completeRegistration' })}
                      onPress={() => this.onCheckEmail()}
                    />
                    <Spacer height={Metrics.doubleBaseMargin} />
                    <Text style={[AppStyles.textSmall, AppStyles.textGray, AppStyles.textCenter]}>
                      Didn’t receive a code?
                {' '}
                      <Text style={[AppStyles.textPrimaryColor]}>Send again</Text>
                    </Text>
                  </View>
                  :
                  current_step === 'completeRegistration' ?
                    <View style={{ flex: 1 }}>
                      <Title
                        text="Complete Registration"
                      />
                      <CustomText style={[]}>For your protection we only send emails to your private inbox</CustomText>
                      <InputWithTitleIcon
                        title="PRIVATE EMAIL"
                        placeholder="Your private e-mail address"
                        onChangeText={(text) => this.setState({ privateEmail: text })}
                        value={privateEmail}
                        error={privateEmailError}
                      />
                      <InputWithTitleIcon
                        title="SELECT PASSWORD"
                        placeholder="****************"
                        onChangeText={(text) => this.setState({ password: text })}
                        value={password}
                        error={passwordError}
                        rightIconName={!password_secured ? "eye" : "eye-off"}
                        secureTextEntry={password_secured}
                        onPressRightIcon={() => this.setState({ password_secured: !password_secured })}
                      />
                      <Spacer height={Metrics.baseMargin} />
                      <ButtonColored
                        text="Complete"
                        //onPress={() => navigate('completeRegistration')}
                        // onPress={() => this.setState({ current_step: 'registrationComplete' })}
                        onPress={() => this.onCompeletRegistration()}
                      />
                      <Spacer height={Metrics.baseMargin} />
                      <RowView style={[{ justifyContent: 'center', }]}>
                        <IconWithText
                          text="I accept"
                          tintColor={Colors.appColor1}
                          textStyle={[AppStyles.textGray]}
                          iconName={acceptPrivacyPolicy ? "checkbox-marked" : "checkbox-blank-outline"}
                          onPress={() => this.setState({ acceptPrivacyPolicy: !acceptPrivacyPolicy })}
                          textContainer={{ marginRight: 0 }}
                        />
                        <Text style={[AppStyles.textSmall, AppStyles.textPrimaryColor, { textDecorationLine: 'underline' }]}> Privacy Policy</Text>
                      </RowView>
                    </View>
                    :
                    current_step === 'registrationDone' ?
                      <View style={{ flex: 1 }}>
                        <Spacer height={Metrics.doubleBaseMargin} />
                        <View style={[AppStyles.center]}>
                          <CustomIcon
                            icon={Images.congratulations}
                            size={totalSize(30)}
                          />
                        </View>
                        <Spacer height={Metrics.baseMargin} />
                        <View style={[AppStyles.compContainer, { alignItems: 'center' }]}>
                          <View style={[AppStyles.rowView]}>
                            <Text style={[AppStyles.textMedium, AppStyles.textPrimaryColor, AppStyles.textBold]}>Welcome to </Text>
                            <LogoRed />
                          </View>
                          <Text style={[AppStyles.textMedium, AppStyles.textGray, AppStyles.textCenter, AppStyles.textBold, { marginHorizontal: width(20),lineHeight: totalSize(2.5) }]}>It is time to do good positive vibes!</Text>
                        </View>
                        <Spacer height={Metrics.baseMargin} />
                        <ButtonColored
                          text="Get Started"
                          //onPress={() => navigate('completeRegistration')}
                          onPress={this.onGetStarted}
                        />

                      </View>
                      :
                      current_step === 'aboutManager' ?
                        <View style={{ flex: 1 }}>
                          <Title
                            text="Tell Us About Your Managers"
                          />
                          <Spacer height={Metrics.smallMargin} />
                          <CustomText style={[]}>Tell us who are the top managers that can solve company issues</CustomText>
                          {/* <ModalPicker
                            title="ADD A MANAGER"
                            data={managerTitles}
                            placeholder="Manager Title"
                            value={selectedManagerTitle}
                            onChange={option => this.setState({ selectedManagerTitle: option.label })}
                          /> */}
                          {/* <Spacer height={Metrics.baseMargin} />
                           <CustomText style={[AppStyles.textSmall,AppStyles.textMedium]}>ADD A MANAGER</CustomText>
                           <Spacer height={Metrics.smallMargin} /> */}
                          <CustomPicker
                            title="ADD A MANAGER"
                            data={managerTitles}
                            placeholder="Manager Title"
                            value={selectedManagerTitle}
                            value={selectedManagerTitle}
                            onChange={(value) => this.setState({ selectedManagerTitle: value })}
                          />
                          <Spacer height={Metrics.smallMargin} />
                          <InputWithTitleIcon
                            //title="PRIVATE EMAIL"
                            placeholder="Manager Name"
                            onChangeText={(text) => this.setState({ managerName: text })}
                            value={managerName}
                          //error={privateEmailError}
                          />
                          <Spacer height={Metrics.smallMargin} />
                          <InputWithTitleIcon
                            //title="PRIVATE EMAIL"
                            placeholder="Manager E-mail"
                            onChangeText={(text) => this.setState({ managerEmail: text })}
                            value={managerEmail}
                          //error={privateEmailError}
                          />
                          <Spacer height={Metrics.baseMargin} />
                          <ButtonBordered
                            text="Add Another"
                            onPress={this.onAddAnother}
                          />
                          <Spacer height={Metrics.baseMargin} />
                          <ButtonColored
                            text="Done"
                            //onPress={() => navigate('completeRegistration')}
                            onPress={this.onFinalize}
                          />
                          <Spacer height={Metrics.baseMargin} />
                        </View>
                        :
                        null
            }
          </KeyboardAwareScrollView>
        </AuthFooter>
      </View>
    );
  }
}


export default Signup;
