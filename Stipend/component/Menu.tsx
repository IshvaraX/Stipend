// components/HamburgerMenu.tsx
import { View, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native';

interface HamburgerMenuProps {
  isVisible: boolean;
  onClose: () => void;
  user?: { username?: string; email?: string } | null; // Allow null
  onLogout?: () => void;
}

const HamburgerMenu = ({ isVisible, onClose, user, onLogout }: HamburgerMenuProps) => {
  const menuItems = [
    { icon: 'home', label: 'Dashboard' },
    { icon: 'google-wallet', label: 'Budget' },
    { icon: 'signal', label: 'Expenses' },
    { icon: 'rupee', label: 'Savings' },
    { icon: 'gear', label: 'Settings' },
  ];

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <TouchableOpacity className="flex-1 bg-black/50" activeOpacity={1} onPress={onClose}>
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
              <TouchableOpacity key={index} className="flex-row items-center py-4 px-6" onPress={onClose}>
                <FontAwesome name={item.icon} size={24} color="#6b7280" />
                <Text className="font-poppins ml-4 text-gray-700">{item.label}</Text>
              </TouchableOpacity>
            ))}

            {onLogout && (
              <TouchableOpacity className="flex-row items-center py-4 px-6 mt-4 border-t border-gray-200" onPress={() => { onClose(); onLogout(); }}>
                <FontAwesome name="sign-out" size={24} color="#ef4444" />
                <Text className="font-poppins ml-4 text-red-600">Logout</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity className="flex-row items-center py-4 px-6" onPress={onClose}>
              <FontAwesome name="close" size={24} color="#6b7280" />
              <Text className="font-poppins ml-4 text-gray-600">Close Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default HamburgerMenu;