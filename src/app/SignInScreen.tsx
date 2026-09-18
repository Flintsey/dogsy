import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../app/colors';
import AuthButton from '../components/AuthButton';
import AuthFooter from '../components/AuthFooter';
import AuthHeader from '../components/AuthHeader';
import AuthInput from '../components/AuthInput';
import AuthScreenLayout from '../components/AuthScreenLayout';
import Checkbox from '../components/Checkbox';
import PasswordInput from '../components/PasswordInput';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = () => {
    setError('');

    // Admin credentials check
    if (email === 'admin' && password === 'admin123') {
      console.log('Admin signed in');
      router.push('../homescreen');
      return;
    }

    // Any other combination → reject
    setError('Invalid username or password');
    Alert.alert('Login Failed', 'Invalid username or password');
  };

  return (
    <AuthScreenLayout>
      <AuthHeader title="Sign in to MLBB" subtitle="Buy one today get one tomorrow" />

      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <AuthInput
          iconName="person-outline"
          placeholder="admin"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <View style={styles.passwordHeader}>
          <Text style={styles.label}>Password</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <PasswordInput value={password} onChangeText={setPassword} />

        <Checkbox
          checked={rememberMe}
          onToggle={() => setRememberMe(!rememberMe)}
          label="Remember me on this device"
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <AuthButton title="Sign In to Account" onPress={handleSignIn} style={styles.button} />
      </View>

      <AuthFooter
        text="Don't have an account?"
        actionText="Sign up"
        onPress={() => router.push('/RegisterScreen')}
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
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPassword: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
    marginBottom: 8,
  },
  errorText: {
    color: '#DC2626',
    fontSize: 13,
    marginBottom: 12,
    textAlign: 'center',
  },
  button: { marginBottom: 32 },
});