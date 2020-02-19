import React from "react";
import { View, Text, StyleSheet } from "react-native";
import EmptyMessage from "../components/empty-message";
import RoundedButton from "../components/rounded-button";
import global from "../constants/global";

const ListScreen = () => {
  return (
    <View style={{ ...global.container, backgroundColor: "#fff" }}>
      <EmptyMessage />
      <RoundedButton />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
