import React, { useState } from "react";
import { TouchableOpacity, FlatList, ScrollView, View } from "react-native";
import RoundedButton from "../components/rounded-button";
import Card from "../components/card-lists";
import BackgroundContainer from "../constants/backgroundContainer";

const HomeScreen = ({ navigation }) => {
  const randomId = Math.floor(Math.random() * 300 + 1) + "id";

  const [lists, setLists] = useState([
    { title: "Minhas tarefas", key: "1" },
    { title: "Minhas compras", key: "2" }
  ]);

  const handlePress = title => navigation.navigate("List", { title });
  return (
    <BackgroundContainer>
      <FlatList
        data={lists}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate("List", { title: item.title })}
          >
            <Card title={item.title} />
          </TouchableOpacity>
        )}
      />

      <RoundedButton />
    </BackgroundContainer>
  );
};

export default HomeScreen;
