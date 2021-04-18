import { getDecks } from "../utils/api";

export const SHOW_DECKS = "SHOW_DECKS";
export const SHOW_DECK = "SHOW_DECK";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";
export const INITIAL_DATA = "INITIAL_DATA";

/*
I created the action creator functions with the help from the following knowledge:
https://knowledge.udacity.com/questions/192137
https://knowledge.udacity.com/questions/367646
https://knowledge.udacity.com/questions/280298
*/
export function showDecks(decks) {
  return {
    type: SHOW_DECKS,
    decks,
  };
}

export function showDeck(deck) {
  return {
    type: SHOW_DECK,
    deck,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function addCard(deck, newCard) {
  return {
    type: ADD_CARD,
    deck,
    newCard,
  };
}

export function deleteDeck(deck) {
  return {
    type: DELETE_DECK,
    deck,
  };
}

// async action creator to handle the initial data:
/* I created this with the help from the following knowledge:
https://knowledge.udacity.com/questions/280298
*/
export const handleInitialData = () => async (dispatch) => {
  const decks = await getDecks();
  return dispatch(showDecks(decks));
};
