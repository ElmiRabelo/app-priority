import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EmptyImage from "../../assets/no_tasks.png";
import TaskImage from "../../assets/make_list.png";
import global from "../../constants/global";

const ImageCard = ({ isEmpty }) => {
  if (isEmpty) {
    return (
      <View
        style={{
          ...global.container,
          ...styles.container
        }}
      >
        <Image source={EmptyImage} style={styles.image} />
        <Text style={styles.text}>Sem prioridades registradas.</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={TaskImage} style={styles.image} />
      <Text style={styles.text}>Crie uma nova lista</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40
    // position: "absolute",
    // bottom: hp("35%"),
    // left: wp("-5%")
  },
  image: {
    width: wp("100%"),
    height: hp("30%"),
    marginVertical: 40
  },
  text: {
    fontSize: 18,
    marginVertical: 10
  }
});

export default ImageCard;
