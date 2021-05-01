import React, { useState } from "react";
import { Button, Title, TextInput, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import styled from "styled-components/native";

/*
TODO:
--> get deck and then deck.questions.answer via route.params to check it with users answer.
--> create a state for counts for correct answers:
If answer in DB is yes, and answer by user was "correct" the count goes up by 1.
method for handleSubmitCorrect
method for handleSubmitIncorrect
method for handleClickAnswer/Question --> shows the answer-text or goes back to the question-text

--> after the last submit --> navigate automatically to Score.js
*/

/* I used the following knowledge/ressources to create this component:
https://knowledge.udacity.com/questions/282070
--> how to create and iterate over the cards:
https://knowledge.udacity.com/questions/202174

 */

const QuizContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const Quiz = ({ navigation, route }) => {
  const [score, setScore] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [isAnswer, setIsAnswer] = useState(false);
  const [showScore, setShowScore] = useState(false);

  // get the cards/questions list from route params:
  const { deck } = route.params;

  // get the lenght of all decks:
  const allDecks = deck.questions.length;

  //method to handle the answer (click on correct or incorrect button):
  /*   const handleAnswer = (answer) => {
    if (answer === "correct") {
      setScore(score + 1);
      setCurrentCard(currentCard + 1);
    }
  }; */

  // method for (re)starting the Quiz:
  const start = () => {
    setScore(0);
    setCurrentCard(0);
    setIsAnswer(false);
    setShowScore(false);
  };

  // TO DO: create a way to show the next card, after clicking on "correct" or "incorrect" button!
  // --> with a method to get the next question:
  const goToNextQuestion = () => {
    setCurrentCard(currenctCard + 1);
    const nextQuestion = deck.questions[currentCard];
    setIsAnswer(false);
  };

  return (
    <QuizContainer>
      <View>
        <Title variant="caption">{allDecks}</Title>
      </View>
      <View>
        <Button>Answer</Button>
        <Button onPress={start}>Restart Quiz</Button>
      </View>
      <View>
        <Button
          mode="contained"
          color="green"
          //onPress={handleAnswer("correct")}
        >
          Correct
        </Button>
        <Button
          mode="contained"
          color="red"
          //onPress={handleAnswer("incorrect")}
        >
          Incorrect
        </Button>
      </View>
    </QuizContainer>
  );
};

export default Quiz;
