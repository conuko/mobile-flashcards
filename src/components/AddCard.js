import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Title, TextInput, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";
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

  const newCard = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      [name]: value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // update redux store:
  //   // dispatch(addCard(text));
  //   // set the state of the NewDeck component back to "":
  //   setState("");
  //   // go back to home-screen:
  //   toHome();
  //   // save to DB:
  //   saveDeck(text);
  // };

  return (
    <AddCardContainer>
      <Title>{deck}</Title>
      <TextInput
        label="Enter question"
        mode="outlined"
        name="question"
        value={state.question}
        onChangeText={handleChange}
      />
      <TextInput
        label="Enter answer"
        mode="outlined"
        name="answer"
        value={state.answer}
        onChangeText={handleChange}
      />
      <Button mode="contained" onPress={() => console.log(state)}>
        Submit
      </Button>
    </AddCardContainer>
  );
};

export default AddCard;
