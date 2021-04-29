import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Title, TextInput, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";
import { CommonActions } from "@react-navigation/native";
import styled from "styled-components/native";

/* This will be a controlled component with two input forms.
--> So this component will also need its own state:
question & answer
--> a handleSubmit method to submit the new card to the store and db
    update Redux store
    update DB (api.js)
--> navigation: navigationBar on top &
    after click on Submitbutton it will navigate to the current Deck where we added the new card
*/

/* I created this component with the help of the following knowledge:
https://knowledge.udacity.com/questions/565980
*/

const AddCardContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const AddCard = ({ navigation, route }) => {
  const [state, setState] = useState({
    question: "",
    answer: "",
  });

  const { deck } = route.params;

  const dispatch = useDispatch();

  const toDeck = () => {
    navigation.dispatch({
      ...CommonActions.goBack(),
      source: "AddCard",
    });
  };

  const handleChange = (key) => {
    return (value) => {
      setState((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    };
  };

  const handleSubmit = (event) => {
    const newCard = state;
    event.preventDefault();
    // update redux store:
    addCardToDeck(deck, newCard).then(() => {
      dispatch(addCard(deck, newCard));
    });
    // set the state of the NewDeck component back to "":
    setState({
      question: "",
      answer: "",
    });
    // go back to IndividualDeck-screen:
    toDeck();
    // save to DB:
    addCardToDeck(deck, newCard);
  };

  return (
    <AddCardContainer>
      <Title>{deck}</Title>
      <TextInput
        label="Enter question"
        mode="outlined"
        value={state.question}
        onChangeText={handleChange("question")}
      />
      <TextInput
        label="Enter answer"
        mode="outlined"
        value={state.answer}
        onChangeText={handleChange("answer")}
      />
      <Button
        disabled={state.question === "" || state.answer === ""}
        mode="contained"
        onPress={handleSubmit}
      >
        Submit
      </Button>
    </AddCardContainer>
  );
};

export default AddCard;
