import React, { Component, useState } from "react";
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
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../assets/colors/colors";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import learnMorePlaces from "../assets/data/learnMorePlaces";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator;
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" Component={Home} />
      <Tab.Screen name="Liked" Component={Liked} />
    </Tab.Navigator>
  );
};

const renderPlaces = ({ item }) => {
  return (
    <View>
      <ImageBackground
        source={item.image}
        style={styles.cityImage}
      ></ImageBackground>
      <View style={styles.countryCard}>
        <Text style={styles.countryName}>{item.country}</Text>
        <Text style={styles.cityName}>{item.city}</Text>
      </View>
    </View>
  );
};

const screenHeight = Dimensions.get("screen").height;
export default function ({ navigation }) {
  const [searchCity, setSearchCity] = useState("");

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        source={require("../assets/images/hut.png")}
        resizeMode="cover"
        style={styles.imageBkd}
      >
        <LinearGradient
          colors={["white", "transparent"]}
          style={styles.gradient}
          start={[1, 1]}
          end={[1, 0]}
        />
        <View style={styles.containerSearch}>
          <Text style={styles.heading}>Where are you going next?</Text>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchBarInput}
              placeholder={"Search"}
              onChangeText={(val) => setSearchCity(val)}
              keyboardType="ascii-capable"
              KeyboardAppearance="light"
            ></TextInput>
            <View style={styles.textBox}>
              <View style={styles.leftText}>
                <Text style={styles.fieldName}>Flight Date</Text>
                <Text style={styles.fieldVal}>13 Jul - 18 Jul</Text>
              </View>
              <View style={styles.rightText}>
                <Text style={styles.fieldName}>Number of Person</Text>
                <Text style={styles.fieldVal}>1 Room - 2 Persons</Text>
              </View>
            </View>

            <Button
              title="Search"
              buttonStyle={styles.buttonContainer}
              // onPress={() => console.log(FrontPage)}
              //   onPress={() => navigation.navigate("FrontPage")}
              // onPress={() => console.log("Pressed Button")}
            />
          </View>
        </View>
        <View style={styles.recommendedList}>
          <Text style={styles.heading_2}>Recommended List</Text>
          <FlatList
            data={learnMorePlaces}
            renderItem={renderPlaces}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          ></FlatList>
          <Text style={styles.heading_2}>Popular Destination</Text>
          <FlatList
            data={learnMorePlaces}
            renderItem={renderPlaces}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight,
  },
  containerSearch: {
    // alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "7%",
    marginRight: "7%",
    // backgroundColor: "red",
    marginTop: screenHeight * 0.32,
    height: screenHeight * 0.35,
  },
  recommendedList: {
    marginLeft: "7%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: screenHeight * 0.51,
    height: 100,
  },
  searchBar: {
    width: "100%",
    height: "60%",
    opacity: 0.8,
    backgroundColor: "#E5E5E5",
  },
  searchBarInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 15,
    height: "20%",
    // width: 200,
  },
  heading: {
    width: "50%",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  heading_2: {
    width: "50%",
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center", // <-- the magic
  },
  imageBkd: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "50%",
  },
  cityImage: {
    // flex: 1,
    justifyContent: "flex-end",
    width: 100,
    height: 170,
    marginRight: 20,
    // flexDirection: "row",
  },
  logoContainer: {
    flex: 1,
    marginTop: "10%",
  },
  buttonContainer: {
    backgroundColor: colors.greeBlue,
    marginTop: 10,
    // marginBottom: "30%",
    marginRight: "10%",
    marginLeft: "10%",
    // paddingVertical: 30,
  },
  textBox: {
    flexDirection: "row",
  },
  rightText: {
    margin: 10,

    width: "40%",
    marginLeft: "10%",
  },
  leftText: {
    margin: 10,
    width: "40%",
  },
  fieldName: {
    margin: 2,
    fontWeight: "bold",
    fontSize: 10,
  },
  fieldVal: {
    margin: 2,
  },
  countryName: {
    margin: 2,
    fontWeight: "bold",
    fontSize: 20,
  },
  cityName: {
    margin: 2,
    // fontWeight: "bold",
    fontSize: 10,
  },
  countryCard: {
    marginRight: 20,
    borderWidth: 1,
    // borderColor: "#777",
  },
});
