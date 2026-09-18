import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../app/colors';


interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label: string;
}


export default function Checkbox({ checked, onToggle, label }: CheckboxProps) {
  return (
    <View style={styles.rememberRow}>
      <TouchableOpacity onPress={onToggle} style={styles.checkboxContainer}>
        <Ionicons
          name={checked ? 'checkbox' : 'square-outline'}
          size={20}
          color={checked ? colors.primaryBright : colors.border}
        />
      </TouchableOpacity>
      <Text style={styles.rememberText}>{label}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkboxContainer: { marginRight: 8 },
  rememberText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

