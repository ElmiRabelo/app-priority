import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors } from "../../constants/global";

const Card = ({ title }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    padding: 15,
    marginVertical: 12,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.light,
    borderLeftWidth: 5,
    borderColor: colors.grey
  },
  text: {
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontSize: 18,
    letterSpacing: 1.5,
    color: colors.dark
  }
});

export default Card;
