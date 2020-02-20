import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const colors = {
  primary: "#066ed6",
  primaryDark: "#165dae",
  secondary: "#6ed606",
  base: "#6e06d6",
  light: "#f7f7f7",
  dark: "#0C0C0C",
  grey: "#242424"
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});

export default globalStyles;
