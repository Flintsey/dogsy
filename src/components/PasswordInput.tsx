import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AuthInput from './AuthInput';
import { colors } from '../app/colors';


interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}


export default function PasswordInput({
  value,
  onChangeText,
  placeholder = '••••••••',
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <AuthInput
      iconName="lock-closed-outline"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={!isVisible}
      rightElement={
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          <Ionicons
            name={isVisible ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color={colors.primaryBright}
            style={styles.iconRight}
          />
        </TouchableOpacity>
      }
    />
  );
}


const styles = StyleSheet.create({
  iconRight: { marginLeft: 8 },
});

