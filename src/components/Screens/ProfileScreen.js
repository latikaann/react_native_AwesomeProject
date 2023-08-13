import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default ProfileScreen = () => {
  return (
    <View>
      <Text style={styles.header}> ProfileScreen </Text>
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
