import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const DeckCard = styled(Card)`
  padding: 16px;
  margin-top: 16px;
`;

const DeckListCard = ({ deck }) => {
  //TODO: create method to navigate (with navigation from react-native) to IndividualDeck.js
  return (
    <DeckCard elevation={5}>
      <Card.Content>
        <Title>{deck.title}</Title>
        <Paragraph>
          {deck.questions.length} {deck.questions.length > 1 ? "cards" : "card"}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Show more</Button>
      </Card.Actions>
    </DeckCard>
  );
};

//THIS COMPONENT WILL BE CONNECTED TO individualDeckView, if clicked. --> with TouchableOpacity!

export default DeckListCard;
