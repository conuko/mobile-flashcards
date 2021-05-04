import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import DeckList from "./DeckList";
import NewDeck from "./NewDeck";

/*
I created this component with the help of the following resources:
https://reactnavigation.org/docs/material-bottom-tab-navigator/
https://reactnavigation.org/blog/2020/01/29/using-react-navigation-5-with-react-native-paper/
https://callstack.github.io/react-native-paper/bottom-navigation.html
*/

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Decks"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Decks"
        component={DeckList}
        options={{
          tabBarIcon: "home-account",
        }}
      />
      <Tab.Screen
        name="Add Deck"
        component={NewDeck}
        options={{
          tabBarIcon: "plus",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
