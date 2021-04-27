import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IndividualDeck from "./IndividualDeck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";
import BottomTabs from "./BottomTabs";

/*
I created this component excactly like we did it in the React Native Section and with the
help of the following resources:
https://reactnavigation.org/docs/status-bar
https://reactnavigation.org/blog/2020/01/29/using-react-navigation-5-with-react-native-paper/
https://reactnavigation.org/docs/stack-navigator
*/

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main" headerMode="screen">
      <Stack.Screen name="FLASHCARDS" component={BottomTabs} />
      <Stack.Screen
        name="Deck"
        component={IndividualDeck}
        options={({ route }) => {
          const { deckID } = route.params;
          return {
            title: `${deckID}`,
          };
        }}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{ headerTitle: "AddCard" }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerTitle: "Quiz" }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
