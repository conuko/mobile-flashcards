import React, { useState } from "react";
import { Button, Title, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addDeck } from "../actions/index";
import { saveDeck } from "../utils/api";
import styled from "styled-components/native";
import { CommonActions } from "@react-navigation/native";
import { View } from "react-native";

/*
I created this component as we did in the react-native part with the AddEntry.js component
and with the help of the following resources/knowledge:
--> I created the "toHome" method the same way we did it in the React Native course.
*/

/* This will be a controlled component with two input forms.
TODO:
--> navigation: navigationBar on top &
    after click on Submitbutton it will navigate to IndividualDeck.js
*/
const AddDeckContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

const StyledTitle = styled(Title)`
  padding-top: 32px;
  padding-bottom: 16px;
  text-align: center;
  font-size: 45px;
  font-weight: 500;
  line-height: 40px;
`;
const StyledButton = styled(Button)`
  margin-top: 16px;
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
      <StyledTitle variant="caption">
        What is the title of your new deck?
      </StyledTitle>
      <TextInput
        label="Deck Title"
        mode="outlined"
        value={text}
        onChangeText={(event) => setText(event)}
      />
      <StyledButton
        disabled={text === ""}
        mode="contained"
        onPress={handleSubmit}
      >
        Submit
      </StyledButton>
    </AddDeckContainer>
  );
};

export default NewDeck;
