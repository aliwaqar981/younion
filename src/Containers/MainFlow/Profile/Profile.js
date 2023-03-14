import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { ViewMain, AppFooter, Spacer, CustomIcon, InputWithTitleIcon } from '../../../Components';
import { AppStyles, Metrics, Colors, Icons } from '../../../Themes';
import { height, totalSize } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Mailer from 'react-native-mail';
import email from 'react-native-email'
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appEmail: 'contactus@younion.app',
      subject: 'Younion',
      body: 'Write message here',
      nickname: 'Mr. No Bullshit',
      privateEmail: 'm.miguel@abc.com',
      workEmail: 'm.miguel@apple.com',
    };
    props.navigation.setOptions({
      title: 'Mr. No Bullshit'
    })
  }

  sendAppMail = () => {
    const { appEmail, subject, body } = this.state
    let link = (Platform.OS === 'android')
      ? 'mailto:' + appEmail + '?subject=' + subject + '&body=' + body
      : 'mailto:' + appEmail + '&subject=' + subject + '&body=' + body

    Linking.canOpenURL(link)
      .then(supported => {
        if (supported) {
          // 'mailto:support@example.com?subject=Billing Query&body=Description'
          Linking.openURL(link);
        }
      })
      .catch(err => console.error('An error occurred', err));
  }

  sendEmailViaEmailApp = () => {
    const { appEmail, subject, body } = this.state
    if (appEmail) {
      let link = `mailto:${appEmail}`;
      if (subject) {
        link = `${link}?subject=${subject}`;
      }
      if (subject) {
        link = `${link}?body=${body}`;
      } else {
        link = `${link}&body=${body}`;
      }

      Linking.canOpenURL(link)
        .then(supported => {
          if (supported) {
            // 'mailto:support@example.com?subject=Billing Query&body=Description'
            Linking.openURL(link);
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else {
      console.log('sendEmailViaEmailApp -----> ', 'mail link is undefined');
    }
  }

  handleMailer = () => {
    const { appEmail, subject, body } = this.state
    Mailer.mail({
      subject: 'need help',
      recipients: [appEmail],
      ccRecipients: [],
      bccRecipients: [],
      body: body,
      isHTML: false,
      attachments: [{
        path: '',  // The absolute path of the file from which to read data.
        type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        // mimeType - use only if you want to use custom type
        name: '',   // Optional: Custom filename for attachment
      }]
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
          { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response') }
        ],
        { cancelable: true }
      )
    });
  }

  handleEmail = () => {
    const { appEmail, subject, body } = this.state
    const to = [appEmail] // string or array of email addresses
    email(to, {
      // Optional additional arguments
      cc: [], // string or array of email addresses
      bcc: [], // string or array of email addresses
      subject: subject,
      body: body
    }).catch(console.error)
  }

  render() {
    const { appEmail, subject, body, privateEmail, workEmail, nickname } = this.state
    return (
      <ViewMain style={[AppStyles.mainContainerRed]}>
        <View style={[AppStyles.center]}>
          <Spacer height={Metrics.baseMargin} />
          <View style={{}}>
            <View style={[{ height: totalSize(10), width: totalSize(10), backgroundColor: Colors.appColor2, borderRadius: 100 }, AppStyles.center]}>
              <CustomIcon
                icon={Icons.Cup}
                size={totalSize(5)}
              />
            </View>
            <TouchableOpacity style={[{ position: 'absolute', bottom: 0, right: 0, height: totalSize(3), width: totalSize(3), backgroundColor: Colors.appColor2, borderRadius: 100, borderWidth: 3, borderColor: Colors.appColor1 }, AppStyles.center]}>
              <Icon
                name="add"
                size={totalSize(2)}
                color={Colors.appColor1}
              />
            </TouchableOpacity>
          </View>
          <Spacer height={Metrics.baseMargin} />
        </View>
        <AppFooter>
          <KeyboardAwareScrollView>
            <InputWithTitleIcon
              title="NICKNAME"
              onChangeText={(text) => this.setState({ nickname: text })}
              value={nickname}
              placeholder="Nickname here"
            />
            <InputWithTitleIcon
              title="PRIVATE EMAIL"
              onChangeText={(text) => this.setState({ privateEmail: text })}
              value={privateEmail}
              placeholder="Private-email here"
            />
            <InputWithTitleIcon
              title="WORK EMAIL"
              editable={false}
              value={workEmail}
              placeholder="Work-email here"
            />
            <Spacer height={Metrics.doubleBaseMargin} />
            <Text
              //onPress={() => this.sendAppMail()}
             // onPress={() => this.handleMailer()}
             onPress={() => this.handleEmail()}
              style={[AppStyles.textMedium, AppStyles.textPrimaryColor, AppStyles.textCenter, { textDecorationLine: 'underline' }]}>{appEmail}</Text>
          </KeyboardAwareScrollView>
        </AppFooter>
      </ViewMain>
    );
  }
}

export default Profile;
