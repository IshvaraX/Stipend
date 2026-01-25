import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetData, setResetData] = useState<{email?: string}>({});
  const router = useRouter();

  const handleForgotPassword = async () => {
    if (!email) return Alert.alert('Error', 'Please enter your email');
    
    setIsLoading(true);
    try {
      const response = await fetch('https://hfi-backend.vercel.app/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Failed to send reset email');

      Alert.alert('Check your email', 'If an account exists with this email, you will receive reset instructions.', [
        { text: 'OK', onPress: () => setStep(2) }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyToken = async () => {
    if (!token) return Alert.alert('Error', 'Please enter the token from your email');
    
    setIsLoading(true);
    try {
      const response = await fetch('https://hfi-backend.vercel.app/auth/reset-password/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      if (!response.ok || !data.valid) throw new Error('Invalid or expired token');

      setResetData(data);
      Alert.alert('Token Verified', 'You can now set a new password', [
        { text: 'Continue', onPress: () => setStep(3) }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Invalid or expired token. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) return Alert.alert('Error', 'Please fill in both password fields');
    if (newPassword.length < 6) return Alert.alert('Error', 'Password must be at least 6 characters');
    if (newPassword !== confirmPassword) return Alert.alert('Error', 'Passwords do not match');
    
    setIsLoading(true);
    try {
      const response = await fetch('https://hfi-backend.vercel.app/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, new_password: newPassword }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Failed to reset password');

      Alert.alert('Success', 'Password reset successful! You can now login with your new password.', [
        { text: 'Login', onPress: () => router.replace('/(tabs)/LoginTab') }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const stepTitles = {
    1: 'Enter your email to get started',
    2: 'Enter the token from your email',
    3: 'Set your new password'
  };

  const renderStep1 = () => (
    <View className="space-y-4">
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 font-poppins text-gray-900"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        className={`py-4 rounded-xl items-center ${isLoading ? 'bg-gray-400' : 'bg-blue-600'} mt-5 mb-5r`}
        onPress={handleForgotPassword}
        disabled={isLoading}
      >
        <Text className="font-poppins-bold text-white text-lg">
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()} className="items-center">
        <Text className="font-poppins text-blue-500">Back to Login</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep2 = () => (
    <View className="space-y-4">
      <View className="bg-blue-50 rounded-xl p-4 mb-4">
        <Text className="font-poppins text-blue-800 text-sm">
          Check your email for a reset token. Enter it below to continue.
        </Text>
      </View>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 font-poppins text-gray-900"
        placeholder="Enter the token from email"
        value={token}
        onChangeText={setToken}
        autoCapitalize="none"
      />
      <TouchableOpacity
        className={`py-4 rounded-xl items-center ${isLoading ? 'bg-gray-400' : 'bg-blue-600'}`}
        onPress={handleVerifyToken}
        disabled={isLoading}
      >
        <Text className="font-poppins-bold text-white text-lg">
          {isLoading ? 'Verifying...' : 'Verify Token'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStep(1)} className="items-center">
        <Text className="font-poppins text-blue-500">Back to Email</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep3 = () => (
    <View className="space-y-4">
      <View className="bg-green-50 rounded-xl p-4 mb-4">
        <Text className="font-poppins text-green-800 text-sm">
          Token verified for: {resetData.email}
        </Text>
      </View>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 font-poppins text-gray-900"
        placeholder="Enter new password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 font-poppins text-gray-900"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity
        className={`py-4 rounded-xl items-center ${isLoading ? 'bg-gray-400' : 'bg-green-600'}`}
        onPress={handleResetPassword}
        disabled={isLoading}
      >
        <Text className="font-poppins-bold text-white text-lg">
          {isLoading ? 'Resetting...' : 'Reset Password'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStep(2)} className="items-center">
        <Text className="font-poppins text-blue-500">Back to Token</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-white px-6">
      <View className="pt-16">
        <TouchableOpacity onPress={() => router.back()} className="mb-6">
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="font-poppins-bold text-3xl text-gray-900 mb-2">Reset Password</Text>
        <Text className="font-poppins text-gray-500">{stepTitles[step]}</Text>
      </View>

      <View className="flex-1 justify-center">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </View>

      <View className="pb-10 items-center">
        <Text className="font-poppins text-gray-400 text-sm">Need help? Contact support</Text>
      </View>
    </View>
  );
};

export default ForgotPassword;