import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducers";
import middleware from "./src/middleware";

import DeckList from "./src/components/DeckList";

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={styles.container}>
          {/* <Text>Welcome to Mobile Flashcards!</Text> */}
          <DeckList />
          <StatusBar style="auto" />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
