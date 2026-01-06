import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IntroTab from "@/app/(tabs)/IntroTab";
import "../global.css";

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <IntroTab />
      </View>
    </SafeAreaView>
  );
}

export default Index;