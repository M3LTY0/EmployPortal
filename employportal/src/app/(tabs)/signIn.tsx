import { TextInput, View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { styles } from '../../../styles/formStyles';
import { signInSchema } from '../../../lib/schemas';


export default function SignIn() {

  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(signInSchema),
    mode: 'onChange', // check the rules as the user types
    defaultValues: { email: '', password: '' },
  });
  const [focused, setFocused] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (data: { email: string; password: string }) => {
    setMessage('Welcome back, ' + data.email);
    reset(); // clear the form
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.card}>
          <Text style={styles.title}>Sign In</Text>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Email</Text>
            <Controller control={control} name="email" render={({ field: { onChange, onBlur, value } }) => (
              <TextInput style={[
                styles.input,
                focused === 'email' && styles.inputFocused,
                errors.email && styles.inputError,
              ]}
                placeholder="Email"
                value={value}
                   onChangeText={(text) => { onChange(text); setMessage(''); }}
                onFocus={() => setFocused('email')}
                onBlur={() => { setFocused(''); onBlur(); }}
                autoCapitalize="none"
                keyboardType="email-address" />
            )} />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Password</Text>
            <Controller control={control} name="password" render={({ field: { onChange, onBlur, value } }) => (
              <TextInput style={[
                styles.input,
                focused === 'password' && styles.inputFocused,
                errors.password && styles.inputError,
              ]}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onFocus={() => setFocused('password')}
                onBlur={() => { setFocused(''); onBlur(); }}
                secureTextEntry={true}
                autoCapitalize="none"

              />
            )} />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
          </View>
          {message !== '' && (
            <View style={styles.successContainer}>
              <Text style={styles.successText}>{message}</Text>
            </View>
          )}
          <TouchableOpacity style={[styles.button, styles.primaryButton, !isValid && styles.disabledButton]} onPress={() => handleSubmit(onSubmit)()} disabled={!isValid}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}




