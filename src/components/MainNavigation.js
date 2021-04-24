import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DeckList from "./DeckList";
import IndividualDeck from "./IndividualDeck";
import Quiz from "./Quiz";
import DeckListCard from "./DeckListCard";
import BottomTabs from "./BottomTabs";

/*
I created this component excactly like we did it in the React Native Section and with the
help of the following resources:
https://reactnavigation.org/docs/status-bar
https://reactnavigation.org/blog/2020/01/29/using-react-navigation-5-with-react-native-paper/
https://reactnavigation.org/docs/stack-navigator
*/

const Stack = createStackNavigator();

const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.pop} /> : undefined}
      <Appbar.Content title={previous ? title : undefined} />
    </Appbar.Header>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen
        name="Deck"
        component={IndividualDeck}
        options={{ headerTitle: "Deck" }}
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
