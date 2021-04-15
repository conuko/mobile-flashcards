export const SHOW_DECKS = "SHOW_DECKS";
export const SHOW_DECK = "SHOW_DECK";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";

function showDecks(decks) {
  return {
    type: SHOW_DECKS,
    decks,
  };
}

function showDeck(id) {
  return {
    type: SHOW_DECK,
    id,
  };
}

function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

function addCard(title, newCard) {
  return {
    type: ADD_CARD,
    title,
    newCard,
  };
}

function deleteDeck(id) {
  return {
    type: DELETE_DECK,
    id,
  };
}
