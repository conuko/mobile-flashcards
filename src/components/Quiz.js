import React, { Component } from "react";
import { View, Text, SubmitBtn } from "react-native";
import { connect } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";

/* 
TODO:
method for handleSubmitCurrect
method for handleSubmitIncorrect
method for handleClickAnswer/Question --> shows the answer-text or goes back to the question-text

--> after the last submit --> navigate automatically to Score.js
*/

class Quiz extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>QUESTION</Text>
        </View>
        <View>
          <Text>Link-button to show the answer</Text>
        </View>
        <View>
          <SubmitBtn>Correct</SubmitBtn>
          <SubmitBtn>Incorrect</SubmitBtn>
        </View>
      </View>
    );
  }
}

export default Quiz;
