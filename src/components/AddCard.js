import React, { useState } from "react";
import { Button, Title, TextInput, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";
import { CommonActions } from "@react-navigation/native";
import styled from "styled-components/native";

/* I created this component with the help of the following knowledge and resources:
https://knowledge.udacity.com/questions/565980
https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
https://stackoverflow.com/questions/63710791/react-hooks-handle-multiple-inputs
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
    // update DB and redux store:
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
