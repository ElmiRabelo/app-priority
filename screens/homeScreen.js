import React from "react";
import { View, Text } from "react-native";
import global from "../constants/global";
import RoundedButton from "../components/rounded-button";

const HomeScreen = () => {
  return (
    <View style={global.container}>
      <RoundedButton />
    </View>
  );
};

export default HomeScreen;
