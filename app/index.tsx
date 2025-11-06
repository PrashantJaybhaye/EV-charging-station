import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function Index() {

  // Use `useFonts` only if you can't use the config plugin.
  const [loaded, error] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      <Text className="text-xl font-bold text-blue-900 font-outfit-medium">
        Welcome to Nativewind!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
