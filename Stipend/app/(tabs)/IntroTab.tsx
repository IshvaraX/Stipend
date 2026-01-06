import { Text, View, TouchableOpacity } from "react-native";

const IntroTab = () => {
  return (
    <View className="flex-1 bg-white px-8">
      <View className="h-24" />
      
      <View className="items-center">
        <View className="w-16 h-16 bg-black rounded-3xl items-center justify-center rotate-3">
          <View className="w-6 h-6 bg-blue-500 rounded-full" />
        </View>
        <Text className="font-poppins-bold text-4xl mt-6 tracking-tighter text-black">
          stipend.
        </Text>
      </View>

      <View className="flex-1 justify-center items-center">
        <Text className="font-poppins-semibold text-4xl text-center leading-[44px] text-black">
          Practice for{"\n"}the real thing.
        </Text>
        <Text className="font-poppins text-gray-400 mt-4 text-center text-base">
          Manage your imaginary funds{"\n"}without the actual risk.
        </Text>
      </View>

      <View className="w-full pb-12">
        <TouchableOpacity 
          activeOpacity={0.9}
          className="bg-black py-5 rounded-2xl items-center mb-6"
        >
          <Text className="font-poppins-semibold text-white text-lg">
            login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.7}
          className="items-center"
        >
          <Text className="font-poppins text-gray-500">
            new here? <Text className="font-poppins-semibold text-blue-500 underline">create account</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroTab;