import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const DeckCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 5;
`;

const DeckListCard = ({ deck }) => {
  //TODO: create method to navigate (with navigation from react-native) to IndividualDeck.js
  return (
    <DeckCard>
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
