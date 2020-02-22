import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageCard from "../components/image-card";
import RoundedButton from "../components/rounded-button";
import global from "../constants/global";

const ListScreen = () => {
  return (
    <View style={{ ...global.container, backgroundColor: "#fff" }}>
      <ImageCard isEmpty />
      <RoundedButton />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
