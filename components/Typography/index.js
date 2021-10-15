import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Typography = ({children, variant, style}) => {
  return (
    <Text
      style={[styles.defaultColor, styles[variant], style]}
      allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default Typography;
