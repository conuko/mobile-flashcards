import {
  SHOW_DECKS,
  SHOW_DECK,
  ADD_DECK,
  ADD_CARD,
  DELETE_DECK,
} from "../actions";

/*
I created the following reducer function with the help of the following knowledge:
https://knowledge.udacity.com/questions/367646
https://knowledge.udacity.com/questions/301976
https://knowledge.udacity.com/questions/281853
--> how to create the ADD_CARD case:
https://knowledge.udacity.com/questions/565980
*/
export default function decks(state = {}, action) {
  switch (action.type) {
    case SHOW_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case SHOW_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: [],
        },
      };
    case ADD_CARD:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: [
            ...state[action.deck].questions,
            {
              question: action.newCard.question,
              answer: action.newCard.answer,
            },
          ],
        },
      };
    case DELETE_DECK: {
      const { title } = action.deck;
      const { [title]: value, ...remainingDecks } = state;
      return remainingDecks;
    }
    default:
      return state;
  }
}
