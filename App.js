import React from "react";
import { createStore } from "redux";
import { Provider as StoreProvider } from "react-redux";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import reducer from "./src/reducers";
import middleware from "./src/middleware";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import MainNavigation from "./src/components/MainNavigation";

/*
I used the following references and knowledge to create App.js:
https://reactnative.dev/docs/statusbar

*/

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: { ...PaperDarkTheme.colors, ...NavigationDarkTheme.colors },
};

export default function App() {
  return (
    <StoreProvider store={createStore(reducer, middleware)}>
      <PaperProvider theme={CombinedDarkTheme}>
        <NavigationContainer theme={CombinedDarkTheme}>
          <MainNavigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
