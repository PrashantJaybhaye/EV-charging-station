import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      <Text className="text-2xl font-outfit text-blue-900">
        Welcome to Nativewind!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
