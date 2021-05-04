import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const DeckCard = styled(Card)`
  padding: 32px;
  margin-top: 16px;
  elevation: 0.5;
  border-radius: 10px;
`;

const DeckListCard = ({ navigation, deck }) => {
  return (
    <DeckCard>
      <TouchableOpacity
        onPress={() => navigation.navigate("Deck", { deckID: deck.title })}
      >
        <Card.Content>
          <Title>{deck.title}</Title>
          <Paragraph>
            {deck.questions.length}{" "}
            {deck.questions.length === 1 ? "card" : "cards"}
          </Paragraph>
        </Card.Content>
      </TouchableOpacity>
    </DeckCard>
  );
};

//THIS COMPONENT WILL BE CONNECTED TO individualDeckView, if clicked. --> with TouchableOpacity!

export default DeckListCard;
