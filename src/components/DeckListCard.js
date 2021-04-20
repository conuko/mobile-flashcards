import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../utils/Text";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../utils/Spacer";

const DeckCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const DeckTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.body};
`;

const DeckListCard = ({ deck }) => {
  //TODO: create method to navigate (with navigation from react-native) to IndividualDeck.js
  return (
    <DeckCard elevation={5}>
      <Card.Content>
        <DeckTitle>{deck.title}</DeckTitle>
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
