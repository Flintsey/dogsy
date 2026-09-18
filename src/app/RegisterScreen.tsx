import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthButton from '../components/AuthButton';
import AuthFooter from '../components/AuthFooter';
import AuthHeader from '../components/AuthHeader';
import AuthInput from '../components/AuthInput';
import AuthScreenLayout from '../components/AuthScreenLayout';
import Checkbox from '../components/Checkbox';
import PasswordInput from '../components/PasswordInput';
import { colors } from './colors';


export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);


  const handleRegister = () => {
    console.log('Register:', { username, email, password, confirmPassword, agreed });
    router.push('../Login');
  };


  return (
    <AuthScreenLayout>
      <AuthHeader title="Create an Account" subtitle="Join MLBB and start your journey" />


      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <AuthInput
          iconName="person-outline"
          placeholder="shoujaboy"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />


        <Text style={styles.label}>Email address</Text>
        <AuthInput
          iconName="mail-outline"
          placeholder="shoujaboy@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />


        <Text style={styles.label}>Password</Text>
        <PasswordInput value={password} onChangeText={setPassword} />


        <Text style={styles.label}>Confirm Password</Text>
        <PasswordInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Re-enter your password"
        />


        <Checkbox
          checked={agreed}
          onToggle={() => setAgreed(!agreed)}
          label="I agree to the Terms & Privacy Policy"
        />


        <AuthButton title="Create Account" onPress={handleRegister} style={styles.button} />
      </View>


      <AuthFooter
        text="Already have an account?"
        actionText="Sign in"
        onPress={() => console.log('go to login')}
      />
    </AuthScreenLayout>
  );
}


const styles = StyleSheet.create({
  formContainer: { width: '100%' },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.labelText,
    marginBottom: 8,
  },
  button: { marginBottom: 32 },
});








