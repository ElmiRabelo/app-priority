import React, { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  View,
  TextInput,
  StyleSheet
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RoundedButton from "../components/rounded-button";
import Card from "../components/card-lists";
import BackgroundContainer from "../constants/backgroundContainer";

const HomeScreen = ({ navigation }) => {
  const randomId = Math.floor(Math.random() * 300 + 1) + "id";

  const [lists, setLists] = useState([
    { title: "Minhas tarefas", key: "1" },
    { title: "Minhas compras", key: "2" }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const [text, setText] = useState("");

  const addList = () => {
    setLists([...lists, { title: text, key: randomId }]);
    setText("");
    setIsOpen(false);
  };

  const openForm = () => setIsOpen(true);
  return (
    <BackgroundContainer>
      <Modal visible={isOpen} animationType="slide">
        <View style={styles.form}>
          <TextInput
            value={text}
            onChangeText={text => setText(text)}
            placeholder="Cria uma lista"
            style={styles.input}
          />
          <TouchableOpacity onPress={addList}>
            <Feather name="plus" size={30} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </Modal>

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

      <RoundedButton pressHandler={openForm} />
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    marginTop: 25,
    paddingHorizontal: 20,
    width: "100%"
  },
  icon: {
    color: "#333",
    marginHorizontal: 5,
    padding: 15,
    backgroundColor: "#333",
    color: "#fff"
  },
  input: {
    borderWidth: 2,
    borderColor: "#111",
    elevation: 2,
    padding: 15,
    marginHorizontal: 5,
    width: "70%",
    backgroundColor: "#ccc"
  }
});

export default HomeScreen;
