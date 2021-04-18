import React, { Component } from "react";
import { View, Text, SubmitBtn } from "react-native";
import { connect } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";

/* This will be a controlled component with two input forms.
--> So this component will also need its own state:
deckTitle
--> a handleSubmit method to submit the new deck to the store and db
    update Redux store
    update DB (api.js)
--> navigation: navigationBar on top &
    after click on Submitbutton it will navigate to IndividualDeck.js
*/

class NewDeck extends Component {
  render() {
    return (
      <View>
        <Text>NEW DECK</Text>
      </View>
    );
  }
}

export default NewDeck;
