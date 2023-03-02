import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AppStyles, Metrics } from '../../Themes';
import { AuthHeader, AuthFooter, InputWithTitleIcon, Title, Spacer, ButtonColored } from '../../Components';

class CompleteRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password_secured: true
    };
  }

  render() {
    const { password_secured } = this.state
    const { navigate } = this.props.navigation
    return (
      <View style={[AppStyles.mainContainerRed]}>
        <AuthHeader />
        <AuthFooter
          content={
           <ScrollView>
              <View style={{ flex: 1 }}>
              <Title
                text="Complete Registration"
              />
              <InputWithTitleIcon
                title="PRIVATE EMAIL"
                placeholder="myname@company.com"
              />
              <InputWithTitleIcon
                  title="SELECT PASSWORD"
                  placeholder="****************"
                  rightIconName={!password_secured ? "eye" : "eye-off"}
                  secureTextEntry={password_secured}
                  onPressRightIcon={() => this.setState({ password_secured: !password_secured })}
                />
              <Spacer height={Metrics.baseMargin} />
              <ButtonColored
                text="Complete"
                //onPress={() => navigate('completeRegistration')}
              />
              <Spacer height={Metrics.doubleBaseMargin} />
            </View>
           </ScrollView>
             
          }
        />
      </View>
    );
  }
}



export default CompleteRegistration;
