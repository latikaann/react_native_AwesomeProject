import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> CreatePostsScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    marginTop: 100,
  },
  container: {
    backgroundColor: "white",
    height: "100%",
  },
});
