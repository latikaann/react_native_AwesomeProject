import Icon from "react-native-vector-icons/Feather";
import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={styles.userAvatar}
          source={require("../../../assets/images/avatar_rectangle.png")}
        ></Image>
        <View style={styles.userTextContainer}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userText}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    flexDirection: "column",
  },

  userContainer: {
    border: 1,
    borderBlockColor: "black",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    height: 60,
  },
  userAvatar: {
    width: 60,
    height: 60,
  },
  userTextContainer: {
    marginLeft: 8,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15.23,
    color: "#212121",
  },
  userText: {
    fontSize: 11,
    lineHeight: 12.89,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
