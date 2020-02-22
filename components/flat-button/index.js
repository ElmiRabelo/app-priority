import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../constants/global";

const FlatButton = ({ title, hasIcon, onPress, size, style }) => {
  if (hasIcon) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Feather
          name={title}
          size={size}
          style={{ ...styles.button, ...style }}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonTile}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    color: colors.light,
    backgroundColor: colors.base,
    elevation: 1
  },
  buttonTile: {
    color: colors.light,
    textTransform: "uppercase",
    fontSize: 16
  }
});

export default FlatButton;
