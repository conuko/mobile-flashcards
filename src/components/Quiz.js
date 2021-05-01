import React, { useState } from "react";
import { Button, Title, TextInput, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import styled from "styled-components/native";

/*
TODO:
--> get questions.answer from redux store to check it with users answer.
--> create a state for counts for correct answers:
If answer in DB is yes, and answer by user was "correct" the count goes up by 1.
method for handleSubmitCurrect
method for handleSubmitIncorrect
method for handleClickAnswer/Question --> shows the answer-text or goes back to the question-text

--> after the last submit --> navigate automatically to Score.js
*/

const QuizContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const Quiz = ({ navigation, route }) => {
  const [score, setScore] = useState(0);

  const { deck } = route.params;

/*   const submitAnswer = (answer) => {
    if (answer )
  } */

  return (
    <QuizContainer>
      <View>
        <Title variant="caption">{deck.questions.length}</Title>
      </View>
      <View>
        <Button>Answer</Button>
      </View>
      <View>
        <Button mode="contained" color="green">
          Correct
        </Button>
        <Button mode="contained" color="red">
          Incorrect
        </Button>
      </View>
    </QuizContainer>
  );
};

export default Quiz;
