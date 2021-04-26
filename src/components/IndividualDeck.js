import React, { Component } from "react";
import { View, Text, SubmitBtn } from "react-native";
import { connect } from "react-redux";
import { removeDeck } from "../utils/api";

/* I created this component with the help of the following resources/knowledge:
--> how to pass parameters to routes (in my mapStateToProps function):
https://reactnavigation.org/docs/params/
https://github.com/udacity/reactnd-UdaciFitness-complete/commit/18aeee6aac40702c2d86cf976a9a67c5691505cf

*/

class IndividualDeck extends Component {
  /* TODO:
    --> method to Navigate to AddCard
    --> method to navigate to Quiz
    --> method to delete the deck
    */
  render() {
    const { deck, navigation } = this.props;
    return (
      <View>
        <View>
          <Text>{deck.title}</Text>
          <Text>{deck.questions.length}</Text>
        </View>
        <View>
          <SubmitBtn>Add Card</SubmitBtn>
          <SubmitBtn>Start Quiz</SubmitBtn>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, { route }) {
  const { deckID } = route.params;
  return {
    deck: state[deckID],
  };
}

export default connect(mapStateToProps)(IndividualDeck);
