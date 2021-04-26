import React, { useState } from "react";
import { View, SubmitBtn } from "react-native";
import { Button, Title, TextInput, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addDeck } from "../actions/index";
import styled from "styled-components/native";

/* This will be a controlled component with two input forms.
TODO:
--> navigation: navigationBar on top &
    after click on Submitbutton it will navigate to IndividualDeck.js
*/
const AddCardContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const NewDeck = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addDeck(text));
    setText("");
  };

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
      <Button mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </AddCardContainer>
  );
};

export default NewDeck;
