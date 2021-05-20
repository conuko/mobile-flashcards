import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import DeckList from "./DeckList";
import NewDeck from "./NewDeck";

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
