import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import global, { colors } from "./global";

const Header = props => {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={25} color={colors.dark} />
      <View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    letterSpacing: 1.2,
    textAlign: "right"
  }
});

export default Header;
