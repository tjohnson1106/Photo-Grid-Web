import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Header extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../img/header_image.jpg")}
          style={styles.cart}
        />
        <Text>Photo Grid Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 80,
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#ccc"
  },
  cart: {
    width: 40,
    height: 40
  },
  logo: {
    fontSize: 20,
    marginLeft: 10,
    color: "#292929"
  }
});

export default Header;
