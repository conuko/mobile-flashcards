import React, { Component } from "react";
import { View, Text, SubmitBtn, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions/index";

/* This will be a controlled component with two input forms.
--> So this component will also need its own state:
question & answer
--> a handleSubmit method to submit the new card to the store and db
    update Redux store
    update DB (api.js)
--> navigation: navigationBar on top &
    after click on Submitbutton it will navigate to the current Deck where we added the new card
*/

class AddCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ADD CARD</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddCard;
