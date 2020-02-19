import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import global, { colors } from "../../constants/global";

const RoundedButton = () => {
  return (
    <View style={{ ...global.container, ...styles.container }}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.buttonContainer}>
          <Feather name="plus" size={40} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  buttonContainer: {
    height: wp("20%"),
    width: wp("20%"),
    borderRadius: wp("20%") / 2,
    backgroundColor: colors.base,
    elevation: 3,
    marginVertical: hp("3%"),
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RoundedButton;
