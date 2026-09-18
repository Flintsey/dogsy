import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../app/colors';


interface AuthButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}


export default function AuthButton({ title, onPress, style, disabled }: AuthButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: { opacity: 0.5 },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});

