import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useRouter } from "expo-router";

const RegisterTab = () => {
    const router = useRouter();
  const { register, isLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    try {
      await register(username, email, password);
      Alert.alert('Success', 'Account created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <View className="flex-1 bg-white px-6">
      <View className="flex-1 justify-center">
        <View className="mb-10">
          <Text className="font-poppins-bold text-3xl text-gray-900 mb-2">
            Create account
          </Text>
          <Text className="font-poppins text-gray-500">
            Join Stipend today
          </Text>
        </View>

        <View className="space-y-6">
          <TextInput
            className="border border-gray-300 rounded-xl px-4 py-3 font-poppins text-gray-900 mb-8"
            placeholder="Choose a username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <TextInput
            className="border border-gray-300 rounded-xl px-4 py-3 font-poppins text-gray-900 mb-9"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View>
            <TextInput
              className="border border-gray-300 rounded-xl px-4 py-3 font-poppins text-gray-900 mb-9"
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Text className="font-poppins text-gray-400 text-xs mt-1">
              Must be at least 6 characters
            </Text>
          </View>
        </View>
      </View>

      <View className="pb-10">
        <TouchableOpacity
          className={`py-4 rounded-xl items-center ${isLoading ? 'bg-gray-400' : 'bg-black'}`}
          onPress={handleRegister}
          disabled={isLoading}
        >
          <Text className="font-poppins-bold text-white text-lg">
            {isLoading ? 'Creating account...' : 'Create Account'}
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="font-poppins text-gray-500">
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/LoginTab")}
            >
            <Text className="font-poppins-bold text-blue-500">
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterTab;