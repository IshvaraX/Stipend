import { useState } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const HomeTab = () => {
  const { user, logout } = useAuth();
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    { icon: 'home', label: 'Dashboard',  },
    { icon: 'google-wallet', label: 'Budget' },
    { icon: 'signal', label: 'Expenses', },
    { icon: 'rupee', label: 'Savings',},
    { icon: 'gear', label: 'Settings',},
  ];

  return (
    <View className="flex-1 bg-white">
      <View className="px-6 pt-16 pb-4 border-b border-gray-200">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => setMenuVisible(true)}>
              <FontAwesome name="align-justify" size={28} color="#000" />
            </TouchableOpacity>
            <Text className="font-poppins-bold text-2xl ml-4 text-gray-900">Stipend</Text>
          </View>
          
          <View className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full items-center justify-center">
            <FontAwesome name="user" size={24} />
            <Text className="font-poppins-bold text-white text-lg">
              {user?.username?.charAt(0).toUpperCase() || '👤'}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-1 justify-center items-center px-6">
        <View className="items-center">
          <FontAwesome name="user-o" size={80} color="#3b82f6" />
          
          <Text className="font-poppins-bold text-4xl text-gray-900 text-center mb-4 mt-6">
            Hello, {user?.username || 'there'}!
          </Text>
          
          <Text className="font-poppins text-gray-500 text-center text-lg mb-8">
            {user?.email ? `Logged in as ${user.email}` : 'Please log in to continue'}
          </Text>

          {user && (
            <TouchableOpacity onPress={logout} className="flex-row items-center bg-red-500 px-6 py-3 rounded-xl">
              <FontAwesome name="sign-out" size={20} color="white" />
              <Text className="font-poppins-bold text-white ml-2">Logout</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Modal animationType="fade" transparent={true} visible={menuVisible} onRequestClose={() => setMenuVisible(false)}>
        <TouchableOpacity className="flex-1 bg-black/50" activeOpacity={1} onPress={() => setMenuVisible(false)}>
          <View className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg">
            <View className="pt-16 px-6 pb-6 border-b border-gray-200">
              <View className="flex-row items-center">
                <View className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl items-center justify-center">
                  <FontAwesome name="user" size={24} color="white" />
                </View>
                <View className="ml-4">
                  <Text className="font-poppins-bold text-gray-900">{user?.username || 'Guest'}</Text>
                  <Text className="font-poppins text-gray-500 text-sm">{user?.email || 'Not logged in'}</Text>
                </View>
              </View>
            </View>

            <View className="py-6">
              {menuItems.map((item, index) => (
                <TouchableOpacity key={index} className="flex-row items-center py-4 px-6" onPress={() => setMenuVisible(false)}>
                  <FontAwesome name={item.icon} size={24} color={item.color} />
                  <Text className="font-poppins ml-4 text-gray-700">{item.label}</Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity className="flex-row items-center py-4 px-6 mt-4 border-t border-gray-200" onPress={() => { setMenuVisible(false); logout(); }}>
                <FontAwesome name="sign-out" size={24} color="#ef4444" />
                <Text className="font-poppins ml-4 text-red-600">Logout</Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center py-4 px-6" onPress={() => setMenuVisible(false)}>
                <FontAwesome name="close" size={24} color="#6b7280" />
                <Text className="font-poppins ml-4 text-gray-600">Close Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default HomeTab;