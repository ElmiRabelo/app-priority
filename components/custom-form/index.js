import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import global, { colors } from "../../constants/global";
import FlatButton from "../flat-button/index";

const listSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4)
});

const listForm = ({ addList }) => {
  const initialValues = {
    title: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={listSchema}
      onSubmit={values => {
        addList(values.title);
      }}
    >
      {props => (
        <View style={styles.container}>
          <TextInput
            value={props.values.title}
            onChangeText={props.handleChange("title")}
            placeholder="Nome da lista"
            style={styles.input}
          />
          <FlatButton
            title="plus"
            size={30}
            hasIcon
            onPress={props.handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginTop: 15
  },
  input: {
    backgroundColor: colors.light,
    borderBottomWidth: 3,
    borderBottomColor: colors.secondary,
    backgroundColor: colors.grey,
    elevation: 5,
    padding: 15,
    width: "80%",
    color: colors.primary
  }
});

export default listForm;
