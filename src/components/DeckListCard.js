import React from "react";
import { View, Text } from "react-native";

const DeckListCard = ({ deck }) => {
  //TODO: create method to navigate (with navigation from react-native) to IndividualDeck.js
  debugger;
  return (
    <View>
      <Text>{deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
    </View>
  );
};

//THIS COMPONENT WILL BE CONNECTED TO individualDeckView, if clicked.

export default DeckListCard;
