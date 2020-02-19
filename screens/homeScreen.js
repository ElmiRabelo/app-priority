import React from "react";
import RoundedButton from "../components/rounded-button";
import Card from "../components/card-lists";
import BackgroundContainer from "../constants/backgroundContainer";

const HomeScreen = () => {
  return (
    <BackgroundContainer>
      <Card title="Minhas tarefas" />
      <Card title="Minhas compras" />
      <RoundedButton />
    </BackgroundContainer>
  );
};

export default HomeScreen;
