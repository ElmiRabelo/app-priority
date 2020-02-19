import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import global, { colors } from "./global";

const Header = props => {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={25} color={colors.dark} style={styles.icon} />
      <View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    letterSpacing: 1.2
  },
  icon: {
    position: "absolute",
    left: 20
  }
});

export default Header;
