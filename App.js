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

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

/*
I used the following references and knowledge to create App.js:
https://reactnative.dev/docs/statusbar

*/

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

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
