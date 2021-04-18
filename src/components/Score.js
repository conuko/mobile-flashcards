import React, { Component } from "react";
import { View, Text, SubmitBtn } from "react-native";
import { connect } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";

/*
Connected to redux. Shows the percentage
of the correct answers as a score.
--> Button for "Restart Quiz" --> navigate to beginning of Quiz
--> Button for "Back to Deck" --> navigate to current Deck
*/

class Score extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>YOUR SCORE</Text>
        </View>
        <View>
          <Text>SCORE</Text>
        </View>
        <View>
          <SubmitBtn>Restart Quiz</SubmitBtn>
          <SubmitBtn>Back To Deck</SubmitBtn>
        </View>
      </View>
    );
  }
}

export default Score;
