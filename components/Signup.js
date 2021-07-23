import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import colors from "../assets/colors/colors";
import { Button } from "react-native-elements";

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/img.png")}
        resizeMode="cover"
        style={styles.imageBkd}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/building.png")}
          ></Image>
          <View
            style={{
              width: "50%",
              height: 50,
            }}
          >
            <Text style={styles.title}>Peshot</Text>
            <Text style={styles.tagLine}>
              Welcome to peshot Book easy and cheap hotels only on Peshot
            </Text>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.buttonContainer}></TouchableOpacity> */}
        <Button
          title="Lets Start"
          buttonStyle={styles.buttonContainer}
          // onPress={() => console.log(FrontPage)}
          onPress={() => navigation.navigate("FrontPage")}
          // onPress={() => console.log("Pressed Button")}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreenBlue,
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center", // <-- the magic
  },
  logoContainer: {
    alignItems: "center",
    // justifyContent: "center",
    flex: 1,
    marginTop: "30%",
  },
  logo: {
    width: 128,
    height: 56,
  },
  tagLine: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center", // <-- the magic
  },
  imageBkd: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    backgroundColor: colors.greeBlue,
    marginBottom: "30%",
    marginRight: "10%",
    marginLeft: "10%",
    // paddingVertical: 30,
  },
});
