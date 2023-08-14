import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params;

  console.log(route.params);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker title="I am here" coordinate={location} description="Hello" />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  mapContainer: {
    flex: 1,
  },
});
