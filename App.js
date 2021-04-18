import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducers";
import middleware from "./src/middleware";

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <View style={styles.container}>
        <Text>Welcome to Mobile Flashcards!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
