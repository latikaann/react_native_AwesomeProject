import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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
import Icon from "react-native-vector-icons/AntDesign";

export default RegistrationScreen = () => {
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
    const userData = {
      login: login,
      email: email,
      password: password,
    };
    console.log(userData);

    setEmail("");
    setPassword("");
    setLogin("");

    keyboardHide();
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
            <View style={[styles.avatarBox]}>
              <Icon style={[styles.avatarIcon]} name="pluscircleo" size={25} />
            </View>

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Реєстрація</Text>

              <TextInput
                style={[
                  styles.input,
                  focusedInput === "login" ? styles.inputFocused : null,
                ]}
                value={login}
                onChangeText={setLogin}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShownKeyboard(true);
                  handleInputFocus("login");
                }}
                onBlur={handleInputBlur}
              />

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
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>

            <Pressable style={styles.textLoginBtn}>
              <Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>
            </Pressable>
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
    paddingBottom: 45,
  },

  avatarBox: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -(120 / 2),
    alignSelf: "center",
  },
  avatarIcon: {
    color: "#FF6C00",
    position: "absolute",
    bottom: "15%",
    right: "-10%",
  },
  title: {
    marginTop: 92,
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
