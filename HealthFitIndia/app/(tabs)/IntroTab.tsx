import { Text, View, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from "expo-router";

const IntroTab = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="px-6 pt-16">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="font-poppins-bold text-3xl text-gray-900">HealthFit</Text>
            <Text className="font-poppins text-gray-500 mt-1">Health monitoring made simple</Text>
          </View>
          <View className="w-12 h-12 bg-black rounded-2xl items-center justify-center">
            <FontAwesome name="heartbeat" size={24} color="white" />
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View className="flex-1 justify-center px-6">
        <View className="mb-12">
          <Text className="font-poppins-bold text-[40px] text-gray-900 leading-[44px] mb-8">
            Track health.{"\n"}Stay informed.
          </Text>
          
          <View className="space-y-6">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-gray-100 rounded-xl items-center justify-center mr-4 mb-5">
                <FontAwesome name="chart" size={20} color="#000" />
              </View>
              <Text className="font-poppins text-gray-700">Monitor health statistics</Text>
            </View>
            
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-gray-100 rounded-xl items-center justify-center mr-4 mb-5">
                <FontAwesome name="users" size={20} color="#000" />
              </View>
              <Text className="font-poppins text-gray-700">Track family health data</Text>
            </View>
            
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-gray-100 rounded-xl items-center justify-center mr-4 mb-5">
                <FontAwesome name="qrcode" size={20} color="#000" />
              </View>
              <Text className="font-poppins text-gray-700">Scan medications</Text>
            </View>
            
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-gray-100 rounded-xl items-center justify-center mr-4">
                <FontAwesome name="shield-alt" size={20} color="#000" />
              </View>
              <Text className="font-poppins text-gray-700">Emergency assistance</Text>
            </View>
          </View>
        </View>

        {/* Simple Features */}
        <View className="flex-row justify-between mb-12">
          <View className="items-center">
            <FontAwesome name="line-chart" size={28} color="#000" />
            <Text className="font-poppins text-gray-600 text-sm mt-2">Progress</Text>
          </View>
          <View className="items-center">
            <FontAwesome name="calendar" size={28} color="#000" />
            <Text className="font-poppins text-gray-600 text-sm mt-2">Schedule</Text>
          </View>
          <View className="items-center">
            <FontAwesome name="file" size={28} color="#000" />
            <Text className="font-poppins text-gray-600 text-sm mt-2">Records</Text>
          </View>
        </View>
      </View>

      {/* Bottom Actions */}
      <View className="px-6 pb-12">
        <TouchableOpacity 
          className="bg-black py-4 rounded-xl items-center mb-4"
          onPress={() => router.push("/(tabs)/LoginTab")}
        >
          <Text className="font-poppins-bold text-white text-lg">Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="items-center"
          onPress={() => router.push("/(tabs)/RegisterTab")}
        >
          <Text className="font-poppins text-gray-600">
            Already have an account? <Text className="font-poppins-bold text-black">Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroTab;