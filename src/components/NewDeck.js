import React, { useState } from "react";
import { View, SubmitBtn } from "react-native";
import { Button, Title, TextInput, Text } from "react-native-paper";
import { connect } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";
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
  padding: 16px;
`;

const NewDeck = () => {
  const [text, setText] = useState("");

  return (
    <AddCardContainer>
      <Text>NEW DECK</Text>
      <Title variant="caption">What is the title of your new deck?</Title>
      <TextInput
        label="Deck Title"
        mode="outlined"
        value={text}
        onChangeText={(event) => setText(event)}
      />
      <Button mode="contained" onPress={() => console.log(text)}>
        Submit
      </Button>
    </AddCardContainer>
  );
};

export default NewDeck;
