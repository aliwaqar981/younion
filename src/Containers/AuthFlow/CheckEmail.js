import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppStyles, Metrics } from '../../Themes';
import { AuthHeader, AuthFooter, InputWithTitleIcon, Title, Spacer, ButtonColored } from '../../Components';

class CheckEmail extends Component {
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
            <View style={{ flex: 1 }}>
              <Title
                text="Check your Email"
              />
              <InputWithTitleIcon
                title="ADD CODE"
               // placeholder=""
              />
              <Spacer height={Metrics.baseMargin} />
              <ButtonColored
                text="Next"
                onPress={() => navigate('completeRegistration')}
              />
              <Spacer height={Metrics.doubleBaseMargin} />
              <Text  style={[AppStyles.textSmall, AppStyles.textGray, AppStyles.textCenter]}>
              Didn’t receive a code?
              {' '}
              <Text style={[AppStyles.textPrimaryColor]}>Send again</Text>
              </Text>
            </View>
          }
        />
      </View>
    );
  }
}


export default CheckEmail;
