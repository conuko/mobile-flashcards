import React from "react";
import { View, Text } from "react-native";

const DeckListCard = ({ deck }) => {
  //TODO: create method to navigate (with navigation from react-native) to IndividualDeck.js
  return (
    <View>
      <Text>{deck.title}</Text>
      <Text>
        {deck.questions.length} {deck.questions.length > 1 ? "cards" : "card"}
      </Text>
    </View>
  );
};

//THIS COMPONENT WILL BE CONNECTED TO individualDeckView, if clicked. --> with TouchableOpacity!

export default DeckListCard;
