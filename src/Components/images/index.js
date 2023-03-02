import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {Colors, AppStyles} from '../../Themes';
import * as Animatable from 'react-native-animatable';

export const ChatUserImage = props => {
  const {style, size, source} = props;
  const defaultSize = totalSize(5);
  return (
    <Image
      source={source}
      style={[
        {
          height: size ? size : defaultSize,
          width: size ? size : defaultSize,
          borderRadius: 100,
        },
        style,
      ]}
    />
  );
};
