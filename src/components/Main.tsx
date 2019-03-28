import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

class Main extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={styles.root}>
        <View>
          <Text>Main Component</Text>
        </View>
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
