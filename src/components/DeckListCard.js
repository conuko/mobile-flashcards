import React from "react";
import { View, Text } from "react-native";

const DeckListCard = ({ deck }) => {
  return (
    <View>
      <Text>{deck.title}</Text>
    </View>
  );
};

export default DeckListCard;
