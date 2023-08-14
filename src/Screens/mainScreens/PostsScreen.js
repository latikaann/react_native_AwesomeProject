import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

export default PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { photo, title, location } = route.params;
      const newPost = { photo, title, location };
      setPosts((prevState) => [...prevState, newPost]);
    }
  }, [route.params]);

  const handleCommentPress = () => {
    navigation.navigate("CommentsScreen");
  };

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

      <View>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          decelerationRate="normal"
          renderItem={({ item }) => (
            <View style={styles.postWrapper}>
              <Image style={styles.post} source={{ uri: item.photo }} />
              <Text style={styles.cardName}>{item.title}</Text>
              <View style={styles.detailsContainer}>
                <TouchableOpacity
                  style={styles.commentsContainer}
                  onPress={handleCommentPress}
                >
                  <EvilIcons name="comment" size={24} color="#BDBDBD" />
                  <Text style={styles.commentCountText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.locationContainer}
                  onPress={() => {
                    if (item.location) {
                      navigation.navigate("MapScreen", {
                        latitude: item.latitude,
                        longitude: item.longitude,
                      });
                    }
                  }}
                >
                  <Ionicons name="location-outline" size={24} color="#BDBDBD" />

                  <Text style={styles.location}>{item.location}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
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
    borderWidth: 1,
    borderColor: "transparent",
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

  postsContainer: {},
  post: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postWrapper: {
    marginTop: 32,
    flex: 1,
    height: 299,
  },
  cardName: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  detailsContainer: {
    marginTop: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentsContainer: {
    gap: 6,
    flexDirection: "row",
  },
  locationContainer: {
    gap: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    textDecorationLine: "underline",
  },
  commentCountText: {
    color: "#BDBDBD",
  },
});
