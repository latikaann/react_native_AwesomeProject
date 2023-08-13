import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/components/Screens/Home";
import PostsScreen from "./src/components/Screens/PostsScreen";
import CreatePostsScreen from "./src/components/Screens/CreatePostsScreen";
import ProfileScreen from "./src/components/Screens/ProfileScreen";
import RegistrationScreen from "./src/components/Screens/RegistrationScreen";
import LoginScreen from "./src/components/Screens/LoginScreen";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Публікації</Text>
        <Feather style={styles.exitIcon} name="log-out" size={24} />
      </View>
      <View style={styles.horizontalLine} />

      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 71,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Posts") {
              iconName = "grid";
            } else if (route.name === "CreatePosts") {
              iconName = "plus";
            } else if (route.name === "Profile") {
              iconName = "user";
            }

            return (
              <View style={focused ? styles.activeIcon : styles.footerIcons}>
                <Feather
                  name={iconName}
                  size={size}
                  color={focused ? "#FFFFFF" : color}
                />
              </View>
            );
          },
        })}
      >
        <Tabs.Screen name="Posts" component={PostsScreen} />
        <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
      </Tabs.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 88,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#BDBDBD",
    marginTop: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    paddingVertical: 11,
  },
  exitIcon: {
    position: "absolute",
    right: 16,
    color: "#BDBDBD",
  },

  footerIcons: {
    padding: 8,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIcon: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 108, 0, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
});
