import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import * as Location from "expo-location";

export default CreatePostsScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleDelete = () => {
    // Обработка удаления
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const takenPhoto = await cameraRef.takePictureAsync();

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      setPhoto(takenPhoto.uri);
    }
  };

  const sendPhoto = async () => {
    try {
      let coords = null;
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        coords = location.coords;
      } else {
        console.log("Дозвіл на доступ до місцезнаходження було відхилений");
      }
      navigation.navigate("Posts", {
        photo,
        title,
        latitude: coords ? coords.latitude : null,
        longitude: coords ? coords.longitude : null,
      });
    } catch (error) {
      console.error("Помилка при отриманні геолокації: ", error);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Дозвіл на доступ до місцезнаходження було відхилений");
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <View style={styles.cameraWrapper}>
          <Camera style={styles.camera} ref={setCameraRef} ratio="4:3">
            {photo && (
              <View style={styles.photoContainer}>
                <Image style={styles.photo} source={{ uri: photo }} />
              </View>
            )}
            <TouchableOpacity
              style={styles.photoBtnContainer}
              onPress={takePhoto}
            >
              <FontAwesome style={styles.photoBtn} name="camera" size={24} />
            </TouchableOpacity>
          </Camera>
        </View>
        <Text style={styles.textPhoto}>Завантажте фото</Text>
      </View>

      <TextInput
        editable
        onChangeText={setTitle}
        // value={value}
        style={styles.textInput}
        placeholder="Назва..."
        placeholderTextColor="#BDBDBD"
      />

      <View style={styles.inputContainer}>
        <Ionicons name="location-outline" size={24} color="#BDBDBD" />
        <TextInput
          editable
          onChangeText={setLocation}
          // value={value}
          style={styles.textInput}
          placeholder="Місцевість..."
          placeholderTextColor="#BDBDBD"
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={sendPhoto}
      >
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Feather name="trash-2" size={24} color="#FF6C00" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  cameraContainer: {
    width: "100%",
    height: 267,
    marginTop: 32,
    marginBottom: 32,
    position: "relative",
  },
  cameraWrapper: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photoBtn: {
    color: "rgba(255, 255, 255, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  photoBtnContainer: {
    // marginBottom: 50,
    width: 60,
    height: 60,
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  photoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  textPhoto: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#BDBDBD",
  },
  textInput: {
    backgroundColor: "transparent",
    borderBottomColor: "rgba(232, 232, 232, 1)",
    borderBottomWidth: 1,
    height: 50,
    width: "100%",
  },
  inputContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderBottomColor: "rgba(232, 232, 232, 1)",
    borderBottomWidth: 1,
    height: 50,
  },
  button: {
    marginTop: 43,
    height: 51,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 18.75,
  },
});
