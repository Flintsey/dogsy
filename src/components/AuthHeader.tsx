import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../app/colors';


interface AuthHeaderProps {
  logoText?: string;
  title: string;
  subtitle: string;
}


export default function AuthHeader({
  logoText = 'Bro ni Marbien',
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>{logoText}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </>
  );
}


const styles = StyleSheet.create({
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 32,
  },
});

