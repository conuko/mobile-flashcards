import React, { Component } from "react";
import { View, Text, SubmitBtn } from "react-native";
/* import { connect } from "react-redux";
import { removeDeck } from "../utils/api"; */

class IndividualDeck extends Component {

    /* TODO:
    --> method to Navigate to AddCard
    --> method to navigate to Quiz
    --> method to delete the deck
    */
  render() {
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

export default IndividualDeck;
