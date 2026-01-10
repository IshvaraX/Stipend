// app/(tabs)/login.tsx
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

const LoginTab = () => {
  const { login, isLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await login(username, password);
      Alert.alert('Success', 'Logged in successfully!');
    } catch (error) {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <View className="flex-1 bg-white px-6">
      <View className="flex-1 justify-center">
        <View className="mb-10">
          <Text className="font-poppins-bold text-3xl text-gray-900 mb-2">
            Welcome back
          </Text>
          <Text className="font-poppins text-gray-500">
            Sign in to continue
          </Text>
        </View>

        <View className="space-y-4">
          <View>
            <Text className="font-poppins-medium text-gray-700 mb-2">
              Username
            </Text>
            <TextInput
              className="border border-gray-300 rounded-xl px-4 py-3 font-poppins text-gray-900"
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text className="font-poppins-medium text-gray-700 mb-2">
              Password
            </Text>
            <TextInput
              className="border border-gray-300 rounded-xl px-4 py-3 font-poppins text-gray-900"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity className="items-end">
            <Text className="font-poppins text-blue-500">
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="pb-10">
        <TouchableOpacity
          className={`py-4 rounded-xl items-center ${
            isLoading ? 'bg-gray-400' : 'bg-black'
          }`}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text className="font-poppins-bold text-white text-lg">
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="font-poppins text-gray-500">
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity>
            <Text className="font-poppins-bold text-blue-500">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginTab;