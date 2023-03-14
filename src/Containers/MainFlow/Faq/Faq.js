import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ViewMain, AppFooter, LineHorizontal, RowView, LogoRed } from '../../../Components';
import { AppStyles, Colors } from '../../../Themes';
import Accordion from 'react-native-collapsible/Accordion';
import { Icon } from 'react-native-elements';
import { totalSize, height } from 'react-native-dimension';
class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          question: 'How does it work?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis risus sollicitudin.',
        },
        {
          question: 'Is this the official',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis risus sollicitudin.',
        },
        {
          question: 'Am I anonymous?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis risus sollicitudin.',
        },
        {
          question: 'Is it legal?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis risus sollicitudin.',
        },
        {
          question: 'What about bullying?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis risus sollicitudin.',
        },
        {
          question: "What to do if the CEO doesn't care?",
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis risus sollicitudin.',
        },
        {
          question: "How to invite people?",
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis risus sollicitudin.',
        }
      ],
      activeSections: [],
    };
  }
  _renderSectionTitle = section => {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text>{section.answer}</Text>
      </View>
    );
  };
  _renderHeader = (content, index, isActive, sections) => {
    return (
      <View style={{}}>
        {
          index === 0 ? null : <LineHorizontal height={height(1.5)} style={{ backgroundColor: Colors.appBgColor2 }} />

        }
        <View style={[AppStyles.rowCompContainer]}>
          <View style={[{ flex: 8, }, AppStyles.rowView]}>
            <Text style={[AppStyles.textRegular, AppStyles.textBold]}>{content.question}{index === 1 ? ' ' : null}</Text>
            {
              index === 1 ?
                <RowView>
                  <LogoRed />
                  <Text style={[AppStyles.textRegular, AppStyles.textBold]}> ?</Text>
                </RowView>
                :
                null
            }
          </View>
          <View style={{ flex: 2, alignItems: 'flex-end' }}>
            <Icon
              name={isActive ? "ios-arrow-up" : "ios-arrow-down"}
              type="ionicon"
              size={totalSize(1.5)}
            />
          </View>
        </View>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={[AppStyles.compContainer, { marginTop: 0, }]}>
        <Text style={[AppStyles.textSmall]}>{section.answer}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };
  render() {
    const { sections, activeSections } = this.state
    return (
      <ViewMain style={[AppStyles.mainContainerRed]}>
        <AppFooter>
          <Accordion
            sections={sections}
            activeSections={activeSections}
            underlayColor={'transparent'}
            //renderSectionTitle={this._renderSectionTitle}
            renderHeader={(content, index, isActive, sections) => this._renderHeader(content, index, isActive, sections)}
            renderContent={this._renderContent}
            onChange={this._updateSections}
          />
          <View style={{ flex: 1, backgroundColor: Colors.appBgColor2 }}></View>
        </AppFooter>
      </ViewMain>
    );
  }
}

export default Faq;
