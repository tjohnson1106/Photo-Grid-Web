import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";

class Banner extends Component {
  state = {};
  render() {
    return (
      <Image source={require("../img/banner_img.jpg")} style={styles.banner} />
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Banner;
