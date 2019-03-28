import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "./Header";

class Main extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={styles.root}>
        <Header />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Main;
