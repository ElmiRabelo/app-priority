import React from "react";
import RoundedButton from "../components/rounded-button";
import Card from "../components/card-lists";
import BackgroundContainer from "../constants/backgroundContainer";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => navigation.navigate("List");
  return (
    <BackgroundContainer>
      <Card title="Minhas tarefas" handlePress={handlePress} />
      <Card title="Minhas compras" handlePress={handlePress} />
      <RoundedButton />
    </BackgroundContainer>
  );
};

export default HomeScreen;
