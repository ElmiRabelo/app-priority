import React from "react";
import { StyleSheet } from "react-native";
//REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
//NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//COMPONENTS
import HomeScreen from "./screens/homeScreen";
import Header from "./constants/header";
import ListScreen from "./screens/listScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { height: 90 }
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: props => <Header title="Minhas Listas" {...props} />
            }}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
