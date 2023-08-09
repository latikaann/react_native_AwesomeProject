import { useFonts } from "expo-font";

import RegistrationScreen from "./src/components/Screens/RegistrationScreen";
import LoginScreen from "./src/components/Screens/LoginScreen";

import { StyleSheet } from "react-native";
import PostsScreen from "./src/components/Screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({});
