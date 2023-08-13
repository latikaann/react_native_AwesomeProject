import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import { StyleSheet } from "react-native";

import { useRoute } from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute({});
  // const routing = useRoute(null);

  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({});
