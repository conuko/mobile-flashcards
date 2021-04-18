import AsyncStorage from "@react-native-async-storage/async-storage";

/*
I created the following async functions with the help of the following knowledge/resources:
--> how to set initialDecks:
https://knowledge.udacity.com/questions/280298

https://knowledge.udacity.com/questions/480149
https://www.javatpoint.com/react-native-asyncstorage
https://react-native-async-storage.github.io/async-storage/docs/api
https://knowledge.udacity.com/questions/135724
https://knowledge.udacity.com/questions/367646
*/

// initial Data:
export const decks = {
  Deck1: {
    title: "Deck1",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  Deck2: {
    title: "Deck2",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

/*
I set this key, which is basically just where we're going to persist the
information inside of our AsyncStore (like we did in the FitnessApp Project):
*/
const CARD_STORAGE_KEY = "MobileFlashcards:decks";

// to get all the decks:
/* export const getDecks = async () => {
  const data = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  return JSON.parse(data);
}; */

export const getDecks = async () => {
  try {
    let value = await AsyncStorage.getItem(CARD_STORAGE_KEY);
    if (value !== null) {
      // value previously stored
      value = await JSON.parse(value);
      return value;
    } else {
      return decks;
    }
  } catch (e) {
    // error reading value
    return decks;
  }
};

// take in a single title argument and return the deck associated with that title from all decks:
export const getDeck = async (deck) => {
  let value = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  return JSON.parse(value)[deck];
};

// to create and save a new deck:
export const saveDeck = async (title) => {
  const savedDeck = JSON.stringify({
    [title]: { title: title, questions: [] },
  });
  await AsyncStorage.mergeItem(CARD_STORAGE_KEY, savedDeck);
  return JSON.parse(savedDeck);
};

// to create and save a new card with a question and an answer to the current deck:
/* I created the following async function with the help of the following knowledge:
https://knowledge.udacity.com/questions/135724
*/
export const addCardToDeck = async (title, newCard) => {
  const value = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  const data = JSON.parse(value);
  const deck = data[title];
  deck.questions.push(newCard);
  const newDeck = { [title]: deck };
  return await AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify(newDeck)
  );
};

// to delete a deck:
/* I created the following async function with the help of the following knowledge:
https://knowledge.udacity.com/questions/192137
https://knowledge.udacity.com/questions/367646
*/
export const removeDeck = async (deck) => {
  const results = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    delete data[deck];

    await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data));
    return data;
  }
  return {};
};
