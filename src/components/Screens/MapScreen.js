import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default MapScreen = () => {
  return (
    <View>
      <Text style={styles.header}> MapScreen </Text>
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
