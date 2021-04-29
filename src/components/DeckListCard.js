import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const DeckCard = styled(Card)`
  padding: 16px;
  margin-top: 16px;
`;

const DeckListCard = ({ navigation, deck }) => {
  return (
    <DeckCard elevation={5}>
      <Card.Content>
        <Title>{deck.title}</Title>
        <Paragraph>
          {deck.questions.length}{" "}
          {deck.questions.length === 1 ? "card" : "cards"}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => navigation.navigate("Deck", { deckID: deck.title })}
        >
          Show more
        </Button>
      </Card.Actions>
    </DeckCard>
  );
};

//THIS COMPONENT WILL BE CONNECTED TO individualDeckView, if clicked. --> with TouchableOpacity!

export default DeckListCard;
