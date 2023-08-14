import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "./PostsScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const NestedScreens = createStackNavigator();

export default Home = () => {
  return (
    <NestedScreens.Navigator>
      <NestedScreens.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerRight: () => (
            <View>
              <TouchableOpacity onPress={() => alert("This is a button!")}>
                <Feather style={styles.exitIcon} name="log-out" size={24} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <NestedScreens.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerTitleAlign: "center",
        }}
      />
      <NestedScreens.Screen
        options={{
          title: "Карта",
          headerTitleAlign: "center",
        }}
        name="MapScreen"
        component={MapScreen}
      />
    </NestedScreens.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: 88,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    // paddingVertical: 11,
  },
  exitIcon: {
    right: 16,
    color: "#BDBDBD",
  },
});
