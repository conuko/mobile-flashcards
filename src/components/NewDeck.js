import React, { Component } from "react";
import { View, SubmitBtn } from "react-native";
import { Text } from "../utils/Text";
import { connect } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";
import { SafeArea } from "../utils/SafeArea";
import styled from "styled-components/native";

/* This will be a controlled component with two input forms.
--> So this component will also need its own state:
deckTitle
--> a handleSubmit method to submit the new deck to the store and db
    update Redux store
    update DB (api.js)
--> navigation: navigationBar on top &
    after click on Submitbutton it will navigate to IndividualDeck.js
*/
const AddCardContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

class NewDeck extends Component {
  render() {
    return (
      <SafeArea>
        <AddCardContainer>
          <Text>NEW DECK</Text>
          <Text variant="caption">What is the title of your new deck?</Text>
          <Text variant="label">Deck Title</Text>
        </AddCardContainer>
      </SafeArea>
    );
  }
}

export default NewDeck;
