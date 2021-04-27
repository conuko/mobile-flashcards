import React, { useState } from "react";
import { View, SubmitBtn } from "react-native";
import { Button, Title, TextInput, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addDeck } from "../actions/index";
import { saveDeck } from "../utils/api";
import styled from "styled-components/native";
import { CommonActions } from "@react-navigation/native";

/*
I created this component as we did in the react-native part with the AddEntry.js component
and with the help of the following resources/knowledge:

*/

/* This will be a controlled component with two input forms.
TODO:
--> navigation: navigationBar on top &
    after click on Submitbutton it will navigate to IndividualDeck.js
*/
const AddDeckContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const NewDeck = (props) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  // function to navigate back to the home screen:
  const toHome = () => {
    props.navigation.dispatch({
      ...CommonActions.goBack(),
      source: "NewDeck",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // update redux store:
    dispatch(addDeck(text));
    // set the state of the NewDeck component back to "":
    setText("");
    // go back to home-screen:
    toHome();
    // save to DB:
    saveDeck(text);
  };

  return (
    <AddDeckContainer>
      <Text>NEW DECK</Text>
      <Title variant="caption">What is the title of your new deck?</Title>
      <TextInput
        label="Deck Title"
        mode="outlined"
        value={text}
        onChangeText={(event) => setText(event)}
      />
      <Button disabled={text === ""} mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </AddDeckContainer>
  );
};

export default NewDeck;
