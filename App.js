import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { createStore } from "redux";
import { Provider as StoreProvider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import reducer from "./src/reducers";
import middleware from "./src/middleware";
import DeckList from "./src/components/DeckList";
import NewDeck from "./src/components/NewDeck";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

/*
I used the following references and knowledge to create App.js:
https://reactnative.dev/docs/statusbar

*/

const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StoreProvider store={createStore(reducer, middleware)}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Decks") {
                  iconName = focused ? "md-layers" : "md-layers-outline";
                } else if (route.name === "Add Deck") {
                  iconName = focused ? "md-create" : "md-create-outline";
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#5282BD",
              inactiveTintColor: "#9C9C9C",
            }}
          >
            <Tab.Screen name="Decks" component={DeckList} />
            <Tab.Screen name="Add Deck" component={NewDeck} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </PaperProvider>
    </StoreProvider>
  );
}
