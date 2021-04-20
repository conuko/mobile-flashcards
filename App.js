import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Provider as StoreProvider } from "react-redux";
import reducer from "./src/reducers";
import middleware from "./src/middleware";
import DeckList from "./src/components/DeckList";
import NewDeck from "./src/components/NewDeck";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/*
I used the following references and knowledge to create App.js:
https://reactnative.dev/docs/statusbar

*/

const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <StoreProvider store={createStore(reducer, middleware)}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Decks" component={DeckList} />
              <Tab.Screen name="Add Deck" component={NewDeck} />
            </Tab.Navigator>
          </NavigationContainer>
          <ExpoStatusBar style="auto" />
        </ThemeProvider>
      </StoreProvider>
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
