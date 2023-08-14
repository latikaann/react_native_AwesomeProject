import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import PostsScreen from "./PostsScreen";

export default ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../../assets/images/background.png")}
      >
        <View style={styles.formContainer}></View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    height: "80%",
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
});
