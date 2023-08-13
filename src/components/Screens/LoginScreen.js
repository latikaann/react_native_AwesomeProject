import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const [isShownKeyboard, setIsShownKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    if (!email || !password) {
      console.log("Щось пішло не так.. Заповніть всі поля.");
      return;
    }

    const isValidEmail = (email) => {
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return emailPattern.test(email);
    };

    if (!isValidEmail(email)) {
      console.log("Невірний формат електронної пошти");
      return false;
    }

    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);

    setEmail("");
    setPassword("");

    keyboardHide();

    navigation.navigate("Home");
    setTimeout(() => {
      navigation.navigate("Posts");
    }, 0);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
    setIsShownKeyboard(true);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../../assets/images/background.png")}
        >
          <View
            style={{
              ...styles.formContainer,
              padingBottom: setIsShownKeyboard ? 32 : 45,
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Увійти</Text>

              <TextInput
                style={[
                  styles.input,
                  focusedInput === "email" ? styles.inputFocused : null,
                ]}
                value={email}
                onChangeText={setEmail}
                placeholder="Адреса електронної пошти"
                keyboardType="email-address"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShownKeyboard(true);
                  handleInputFocus("email");
                }}
                onBlur={handleInputBlur}
              />

              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    focusedInput === "password" ? styles.inputFocused : null,
                  ]}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    setIsShownKeyboard(true);
                    handleInputFocus("password");
                  }}
                  onBlur={handleInputBlur}
                />
                <TouchableOpacity
                  onPress={toggleShowPassword}
                  style={styles.showPasswordButton}
                >
                  <Text style={styles.showPasswordButtonText}>
                    {showPassword ? "Приховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.textLoginBtn}
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.textLogin}>
                Немає акаунту?
                <Text style={styles.underline}>Зареєструватися</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    paddingBottom: 100,
  },
  title: {
    marginTop: 32,
    marginBottom: 32,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35.16,
    letterSpacing: 1,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
    padding: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  inputFocused: {
    borderColor: "#FF6C00",
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
  textLoginBtn: {
    marginTop: 16,
  },
  textLogin: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 18.75,
  },
  underline: {
    textDecorationLine: "underline",
  },
  showPasswordButton: {
    paddingHorizontal: 16,
    position: "absolute",
    right: 0,
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  showPasswordButtonText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 18.75,
  },
});
