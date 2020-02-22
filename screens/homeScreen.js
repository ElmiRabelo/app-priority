import React, { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  Modal,
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import RoundedButton from "../components/rounded-button";
import Card from "../components/card-lists";
import BackgroundContainer from "../constants/backgroundContainer";
import FlatButton from "../components/flat-button";
import CustomForm from "../components/custom-form";
import { colors } from "../constants/global";
import TaskImage from "../assets/make_list.png";

const HomeScreen = ({ navigation }) => {
  const randomId = Math.floor(Math.random() * 300 + 1) + "id";

  const [lists, setLists] = useState([
    { title: "Minhas tarefas", key: "1" },
    { title: "Minhas compras", key: "2" }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const [text, setText] = useState("");

  const addList = title => {
    setLists([...lists, { title, key: randomId }]);
    setText("");
    setIsOpen(false);
  };

  const openForm = () => setIsOpen(true);
  return (
    <BackgroundContainer>
      <Modal visible={isOpen} animationType="slide">
        <View style={styles.formContainer}>
          <CustomForm addList={addList} />
          <Image source={TaskImage} style={styles.image} />
          <Text style={styles.text}>Crie uma nova lista</Text>
          <FlatButton
            title="x"
            size={30}
            hasIcon
            style={styles.button}
            onPress={() => setIsOpen(false)}
          />
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
  formContainer: {
    flex: 1,
    paddingVertical: 20
  },
  button: {
    alignSelf: "center",
    marginTop: "40%",
    backgroundColor: colors.secondary,
    color: colors.base,
    borderRadius: 30
  },
  image: {
    marginTop: 50,
    width: "100%",
    height: "40%"
  },
  text: {
    fontSize: 22,
    letterSpacing: 1,
    textAlign: "center"
  }
});

export default HomeScreen;
