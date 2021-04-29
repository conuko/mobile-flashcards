import React, { Component } from "react";
import { View } from "react-native";
import { Button, Title, Text } from "react-native-paper";
import { connect } from "react-redux";
import { removeDeck } from "../utils/api";
import { deleteDeck } from "../actions";
import { CommonActions } from "@react-navigation/native";

/* I created this component with the help of the following resources/knowledge:
--> how to pass parameters to routes (in my mapStateToProps function):
https://reactnavigation.org/docs/params/
https://github.com/udacity/reactnd-UdaciFitness-complete/commit/18aeee6aac40702c2d86cf976a9a67c5691505cf
https://knowledge.udacity.com/questions/565130
https://knowledge.udacity.com/questions/355220
--> how to delete a deck:
https://knowledge.udacity.com/questions/200468
--> how to use shouldComponentUpdate to prevent the app from crashing when a deck will deleted:
https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action
*/

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
    removeDeck(deck).then(() => {
      dispatch(deleteDeck(deck));
      this.toHome();
    });
  };

  render() {
    const { deck, navigation } = this.props;
    return (
      <View>
        <View>
          <Title>{deck.title}</Title>
          <Text>{`${deck.questions.length} ${
            deck.questions.length === 1 ? "card" : "cards"
          }`}</Text>
        </View>
        <View>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("AddCard", { deck: deck.title })}
          >
            Add Card
          </Button>
          <Button
            mode="contained"
            disabled={deck.questions.length === 0}
            onPress={() => navigation.navigate("Quiz", { deck: deck })}
          >
            Start Quiz
          </Button>
          <Button onPress={this.handleDelete}>Delete Deck</Button>
        </View>
      </View>
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
