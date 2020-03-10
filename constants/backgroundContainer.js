import React from "react";
import { ImageBackground } from "react-native";
import BgPriority from "../assets/bg-priority.jpg";
import global from "./global";

//Reponsavel por ser um component que coloca uma imagem como background
const BackgroundContainer = ({ children }) => {
  return (
    <ImageBackground
      source={BgPriority}
      style={global.container}
      imageStyle={imageStyle}
    >
      {children}
    </ImageBackground>
  );
};

const imageStyle = {
  resizeMode: "cover",
  overflow: "hidden"
};

export default BackgroundContainer;
