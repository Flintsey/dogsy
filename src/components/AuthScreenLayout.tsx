import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../app/colors';


export default function AuthScreenLayout({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
});

