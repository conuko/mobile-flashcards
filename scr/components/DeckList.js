// DATA needed:
// getDecks
import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { showDecks } from "../actions";
import DeckListCard from "./DeckListCard";

/*
I created DeckList with the help of the following knowledge:
--> how to use componentDidMount to get decks from api and dispatch the data to the store
https://knowledge.udacity.com/questions/247636
*/

class DeckList extends Component {
  // get decks from api and dispatch the data to the store:
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then((decks) => dispatch(showDecks(decks)));
  }

  render() {
    const { allDecks } = this.props;
    return (
      <ScrollView>
        {allDecks.map((deck) => (
          <DeckListCard key={deck} id={deck} />
        ))}
      </ScrollView>
    );
  }
}

function mapStateToProps(decks) {
  const allDecks = Object.keys(decks);
  return {
    allDecks,
  };
}

export default connect(mapStateToProps)(DeckList);
