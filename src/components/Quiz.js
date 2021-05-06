import React, { Component } from "react";
import { Button, Card, Title, Text } from "react-native-paper";
import { View } from "react-native";
import {
  setLocalNotification,
  clearLocalNotification,
} from "../utils/notifications";
import styled from "styled-components/native";
import { red } from "../utils/colors";
import { green } from "../utils/colors";
import cardPicture from "../assets/AdobeStock_213167172.png";

/* I used the following knowledge/ressources to create this component:
https://knowledge.udacity.com/questions/282070
--> how to switch between question and answer:
https://knowledge.udacity.com/questions/298722
--> how to create and iterate over the cards:
https://knowledge.udacity.com/questions/202174

https://stackoverflow.com/questions/41604539/objects-are-not-valid-as-a-react-child
https://linguinecode.com/post/how-to-avoid-multiple-re-renders-in-react-shouldcomponentupdate
*/

// < ================ Styling Start ================ >
const QuizContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const QuizCard = styled(Card)`
  margin-top: 16px;
  elevation: 0.5;
  border-radius: 10px;
`;

const Content = styled(Card.Content)`
  padding: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;
// < ================ Styling End ================ >

class Quiz extends Component {
  state = {
    score: 0,
    currentCard: 0,
    isAnswer: false,
  };

  // method to handle the submitted answer:
  handleAnswer = (answer) => {
    if (answer === "correct") {
      this.setState((prevState) => ({
        ...prevState,
        currentCard: this.state.currentCard + 1,
        score: this.state.score + 1,
        isAnswer: false,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        currentCard: this.state.currentCard + 1,
        isAnswer: false,
      }));
    }
    clearLocalNotification().then(setLocalNotification);
  };

  // method to swith between question and answer:
  handleCardSwitch = (event) => {
    this.setState({ isAnswer: event });
  };

  // method for restarting the Quiz:
  start = () => {
    this.setState((prevState) => ({
      ...prevState,
      currentCard: 0,
      score: 0,
      isAnswer: false,
    }));
  };

  render() {
    // get the deck from route params:
    const { deck } = this.props.route.params;

    // get the lenght of all decks:
    const allDecks = deck.questions.length;

    const { currentCard, score, isAnswer } = this.state;

    return (
      <QuizContainer>
        {currentCard === allDecks ? (
          <QuizCard>
            <Card.Cover source={cardPicture} />
            <Content>
              <Title>Your Score</Title>
              <Text>{`${
                (score / allDecks) * 100
              }% of your answers were correct.`}</Text>
              <Content>
                <Button onPress={this.start}>Restart Quiz</Button>
              </Content>
            </Content>
          </QuizCard>
        ) : (
          <QuizCard>
            <Card.Cover source={cardPicture} />
            <Content>
              {isAnswer === false ? (
                <View>
                  <Title variant="caption">
                    {deck.questions[currentCard].question}
                  </Title>
                  <Button onPress={() => this.handleCardSwitch(true)}>
                    Answer
                  </Button>
                </View>
              ) : (
                <View>
                  <Title variant="caption">
                    {deck.questions[currentCard].answer}
                  </Title>
                  <Button onPress={() => this.handleCardSwitch(false)}>
                    Question
                  </Button>
                </View>
              )}
              <Button onPress={this.start}>Restart Quiz</Button>
              <StyledButton
                mode="contained"
                color={green}
                onPress={() => this.handleAnswer("correct")}
              >
                Correct
              </StyledButton>
              <StyledButton
                mode="contained"
                color={red}
                onPress={() => this.handleAnswer("incorrect")}
              >
                Incorrect
              </StyledButton>
            </Content>
          </QuizCard>
        )}
      </QuizContainer>
    );
  }
}

export default Quiz;
