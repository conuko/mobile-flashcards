// DATA needed:
// getDecks
import React, { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { showDecks } from "../actions";
import DeckListCard from "./DeckListCard";
import { SafeArea } from "../utils/SafeArea";
import styled from "styled-components/native";

const DeckListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

/*
I created DeckList with the help of the following knowledge:
https://knowledge.udacity.com/questions/280298
https://knowledge.udacity.com/questions/557077
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
      <SafeArea>
        <DeckListContainer>
          <ScrollView>
            {allDecks.map((deck) => {
              return <DeckListCard key={deck.title} deck={deck} />;
            })}
          </ScrollView>
        </DeckListContainer>
      </SafeArea>
    );
  }
}

function mapStateToProps(state) {
  const allDecks = Object.values(state);
  return {
    allDecks,
  };
}

export default connect(mapStateToProps)(DeckList);
