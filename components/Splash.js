import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Wow something</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
