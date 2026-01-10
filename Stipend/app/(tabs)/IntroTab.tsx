import { Text, View, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from "expo-router";

const IntroTab = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white px-6">
      <View className="pt-16">
        <View className="flex-row items-center">
          <View className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl items-center justify-center">
            <Text className="font-poppins-bold text-white text-lg">₹</Text>
          </View>
          <Text className="font-poppins-bold text-2xl ml-3 text-black">stipend.</Text>
        </View>
      </View>

      <View className="flex-1 justify-center items-center">
        <View className="items-center mb-12">
          <Text className="font-poppins-bold text-5xl text-center text-black mb-4">
            Manage {"\n"}your stipend{"\n"}with Stipend.
          </Text>
          <Text className="font-poppins text-gray-500 text-center text-lg">
            Tired of managing your almost non-existent Stipend? Meet Stipend!
          </Text>
        </View>

        <View className="flex-row justify-between w-full">
          {[
            { icon: "hand-o-right", label: "Swipe to track", bg: "bg-green-100" },
            { icon: "bar-chart", label: "See the math", bg: "bg-blue-100" },
            { icon: "money", label: "Save more", bg: "bg-purple-100" }
          ].map((item, index) => (
            <View key={index} className="items-center">
              <View className={`w-16 h-16 ${item.bg} rounded-2xl items-center justify-center mb-2`}>
                <FontAwesome name={item.icon} size={28} color="#000" />
              </View>
              <Text className="font-poppins-semibold text-sm text-center mt-1">
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View className="pb-10">
        <TouchableOpacity 
          activeOpacity={0.9} 
          className="bg-black py-5 rounded-2xl items-center mb-3"
          onPress={() => router.push("/(tabs)/LoginTab")}
        >
          <Text className="font-poppins-bold text-white text-lg">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.7} 
          className="items-center"
          onPress={() => router.push("/(tabs)/RegisterTab")} // Add navigation here
        >
          <Text className="font-poppins text-gray-500">
            Already have account? <Text className="font-poppins-bold text-blue-500">Sign Up →</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroTab;