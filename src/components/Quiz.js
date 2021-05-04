import React, { Component } from "react";
import { Button, Title, TextInput, Text } from "react-native-paper";
import { connect } from "react-redux";
import { View } from "react-native";
import styled from "styled-components/native";

/* I used the following knowledge/ressources to create this component:
https://knowledge.udacity.com/questions/282070
--> how to flip between cards:
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

const ScoreContainer = styled.View`
  flex: 1;
  padding: 16px;
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
  };

  // method to swith between question and answer:
  handleCardSwitch = (event) => {
    this.setState({ isAnswer: event });
  };

  // method for (re)starting the Quiz:
  start = () => {
    this.setState((prevState) => ({
      ...prevState,
      currentCard: 0,
      score: 0,
      isAnswer: false,
    }));
  };

  render() {
    // get the cards/questions list from route params:
    const { deck, navigation } = this.props;

    // get the lenght of all decks:
    const allDecks = deck.questions.length;

    const { currentCard, score, isAnswer } = this.state;

    return (
      <QuizContainer>
        {currentCard === allDecks ? (
          <ScoreContainer>
            <Title>Your Score</Title>
            <Text>{`${
              (score / allDecks) * 100
            }% of your answers were correct.`}</Text>
            <Button onPress={this.start}>Restart Quiz</Button>
          </ScoreContainer>
        ) : (
          <View>
            <View>
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
            </View>
            <View>
              <Button
                mode="contained"
                color="green"
                onPress={() => this.handleAnswer("correct")}
              >
                Correct
              </Button>
              <Button
                mode="contained"
                color="red"
                onPress={() => this.handleAnswer("incorrect")}
              >
                Incorrect
              </Button>
            </View>
          </View>
        )}
      </QuizContainer>
    );
  }
}

const mapStateToProps = (state, { route }) => {
  return {
    deck: route.params.deck,
  };
};

export default connect(mapStateToProps)(Quiz);
