import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../app/colors';


interface AuthFooterProps {
  text: string;
  actionText: string;
  onPress: () => void;
}


export default function AuthFooter({ text, actionText, onPress }: AuthFooterProps) {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{text} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signupText}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: colors.primary,
    fontSize: 14,
  },
  signupText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});

