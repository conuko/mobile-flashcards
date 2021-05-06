import React, { useState } from "react";
import { Button, Card, Title, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";
import { CommonActions } from "@react-navigation/native";
import styled from "styled-components/native";
import cardPicture from "../assets/AdobeStock_213167172.png";

/* I created this component with the help of the following knowledge and resources:
https://knowledge.udacity.com/questions/565980
https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
https://stackoverflow.com/questions/63710791/react-hooks-handle-multiple-inputs
*/

// < ================ Styling Start ================ >
const AddCardContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const NewCard = styled(Card)`
  margin-top: 16px;
  elevation: 0.5;
  border-radius: 5px;
`;

const Content = styled(Card.Content)`
  padding: 16px;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;

// < ================ Styling End ================ >

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
      <NewCard>
        <Card.Cover source={cardPicture} />
        <Content>
          <StyledTitle>{deck}</StyledTitle>
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
        </Content>
        <Content>
          <Button
            disabled={state.question === "" || state.answer === ""}
            mode="contained"
            onPress={handleSubmit}
          >
            Submit
          </Button>
        </Content>
      </NewCard>
    </AddCardContainer>
  );
};

export default AddCard;
