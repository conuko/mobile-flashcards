import React, { Component } from "react";
import { View } from "react-native";
import { Button, Title, Text } from "react-native-paper";
import { connect } from "react-redux";
import { removeDeck } from "../utils/api";
import { deleteDeck } from "../actions";
import { CommonActions } from "@react-navigation/native";
import styled from "styled-components/native";
import { red } from "../utils/colors";

// < ================ Styling Start ================ >
const IndividualDeckContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

const StyledTitle = styled(Title)`
  padding-top: 32px;
  text-align: center;
  font-size: 34px;
  font-weight: 400;
`;

const StyledText = styled(Text)`
  text-align: center;
  font-size: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;
// < ================ Styling End ================ >

class IndividualDeck extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.deck !== undefined) {
      return true;
    }
    return false;
  }

  toHome = () => {
    const { navigation } = this.props;
    navigation.dispatch({
      ...CommonActions.goBack(),
      source: "Deck",
    });
  };

  handleDelete = (event) => {
    event.preventDefault();
    const { deck, dispatch } = this.props;
    // update redux store:
    dispatch(deleteDeck(deck));
    // go back to Home screen:
    this.toHome();
    // update DB:
    removeDeck(deck);
  };

  render() {
    const { deck, navigation } = this.props;
    return (
      <IndividualDeckContainer>
        <View>
          <StyledTitle>{deck.title}</StyledTitle>
          <StyledText>{`${deck.questions.length} ${
            deck.questions.length === 1 ? "card" : "cards"
          }`}</StyledText>
        </View>
        <View>
          <StyledButton
            mode="outlined"
            onPress={() => navigation.navigate("AddCard", { deck: deck.title })}
          >
            Add Card
          </StyledButton>
          <StyledButton
            mode="contained"
            disabled={deck.questions.length === 0}
            onPress={() => navigation.navigate("Quiz", { deck: deck })}
          >
            Start Quiz
          </StyledButton>
          <StyledButton onPress={this.handleDelete} color={red}>
            Delete Deck
          </StyledButton>
        </View>
      </IndividualDeckContainer>
    );
  }
}

// get the specific deck you clicked on from the store with the deckId passed via route:
function mapStateToProps(state, { route }) {
  const { deckID } = route.params;
  return {
    deck: state[deckID],
  };
}

export default connect(mapStateToProps)(IndividualDeck);
