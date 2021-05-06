import React, { useEffect } from "react";
import { createStore } from "redux";
import { Provider as StoreProvider } from "react-redux";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import reducer from "./src/reducers";
import middleware from "./src/middleware";
import MainNavigation from "./src/components/MainNavigation";
import { setLocalNotification } from "./src/utils/notifications";

/*
I used the following references and knowledge to create App.js:
https://reactnative.dev/docs/statusbar
https://reactnavigation.org/blog/2020/01/29/using-react-navigation-5-with-react-native-paper/#theming
*/

// Standard Theme:
const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: { ...PaperDefaultTheme.colors, ...NavigationDefaultTheme.colors },
};

// Dark Theme (can be applied optionally):
const CombinedDarkTheme = { ...PaperDarkTheme, ...NavigationDarkTheme };

export default function App() {
  useEffect(() => {
    setLocalNotification;
  });
  return (
    <StoreProvider store={createStore(reducer, middleware)}>
      <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <MainNavigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
