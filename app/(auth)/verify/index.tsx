import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import Text from '@/src/components/atoms/Text/Text';
import Heading from '@/src/components/atoms/Heading/Heading';
import AuthWrapper from '@/src/components/organisms/PageThemeWrapper/AuthWrapper';
import styles from './verificationStyles';
import Button from '@/src/components/atoms/Button/Button';
import { useAuth } from '@/src/hooks/useAuth';
import { useAuthStore } from '@/src/store/useAuthStore';

const OTPVerification = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(20);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const { registrationData } = useAuthStore();

  const { verifyOtp, isLoading, error } = useAuth();

  useEffect(() => {
    const countdown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(countdown as NodeJS.Timeout);
  }, [timer]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input if value is entered
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    // Move to previous input on backspace
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    if (!registrationData.userId) return;
    setTimer(20);
    
  };

  const handleVerify = async () => {
    try {
      const otpCode = code.join('');
      // Add your verification logic here
      console.log('Verifying code:', otpCode);
      if (otpCode.length !== 6) {
        Alert.alert("Error", "Please enter a complete 6-digit code");
        return;
      }
  
      verifyOtp({
        userOtp: otpCode,
        userId: registrationData.userId,
        moduleType: process.env.EXPO_PUBLIC_APP_MODULE_TYPE as string,
        tokenType: "PW_RC"
      });
    } catch (error) {
      console.error('Error verifying OTP:', error);
      Alert.alert("Error", "Failed to verify OTP");
    }

  };

  return (
    <AuthWrapper>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.header}>
            <Heading level={1}>Enter Code</Heading>
            <Text>We've sent an SMS with an activation code to your phone</Text>
          </View>

          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => inputRefs.current[index] = ref}
                style={styles.codeInput}
                value={digit}
                onChangeText={text => handleCodeChange(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                id={`code-${index}`}
                selectTextOnFocus
                editable={!isLoading}
              />
            ))}
          </View>

          <View style={styles.footer}>
            <Button 
              onPress={handleVerify}
              disabled={isLoading || code.join('').length !== 6}
              text={isLoading ? "Verifying..." : "Verify"}
              btnStyle={styles.verifyButton}
            />
            <Button 
              onPress={handleResendCode}
              disabled={timer > 0}
            >
              <Text style={styles.resendText}>
                {timer > 0 ? 'Resend code in ' : 'Resend code'}
                {timer > 0 ? `(${timer})` : ''}
              </Text>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </AuthWrapper>
  );
};

export default OTPVerification;