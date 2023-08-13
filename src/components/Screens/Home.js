import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tabs = createBottomTabNavigator();

export default Home = () => {
  return (
    <View>
      <Text style={styles.header}> Home </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "black",
    textAlign: "center",
    marginTop: 100,
  },
});
