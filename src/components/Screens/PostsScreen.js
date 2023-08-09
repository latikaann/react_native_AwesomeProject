import Icon from "react-native-vector-icons/Feather";
import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Публікації</Text>
        <Icon style={styles.exitIcon} name="log-out" size={25} />
        <View style={styles.horizontalLine} />
      </View>

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

      <View style={styles.footerContainer}>
        <View style={styles.horizontalFooterLine} />
        <View style={styles.footerIcons}>
          <Icon name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
        </View>
        <View style={[styles.footerIcons, styles.footerAddIcon]}>
          <Icon name="plus" size={13} color="white" />
        </View>
        <View style={styles.footerIcons}>
          <Icon name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    flexDirection: "column",
  },
  headerContainer: {
    borderColor: "#BDBDBD",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    height: 88,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#BDBDBD",
    position: "absolute",
    left: -16,
    right: -16,
    top: 88,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    paddingBottom: 11,
  },
  exitIcon: {
    paddingBottom: 10,
    color: "#BDBDBD",
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
  footerContainer: {
    borderColor: "#BDBDBD",
    width: "100%",
    paddingHorizontal: 16,
    height: 108,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 31,
    marginTop: "auto",
  },
  footerIcons: {
    padding: 8,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  footerAddIcon: {
    width: 70,
    borderRadius: 20,
    backgroundColor: "rgba(255, 108, 0, 1)",
  },
  horizontalFooterLine: {
    height: 1,
    backgroundColor: "#BDBDBD",
    position: "absolute",
    left: -16,
    right: -16,
    bottom: 83,
  },
});
