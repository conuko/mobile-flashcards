import AsyncStorage from "@react-native-async-storage/async-storage";
//getDecks: return all of the decks along with their titles, questions, and answers. (DONE)
//getDeck:  take in a single id argument and return the deck associated with that id.
//saveDeck: take in a single title argument and add it to the decks.
//addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
//check Documentation of AsyncStorage for info how to setup the functions above!

/*
I set this key, which is basically just where we're going to persist the
information inside of our AsyncStore (like we did in the FitnessApp Project):
*/
const CARD_STORAGE_KEY = "MobileFlashcards:cards";

// to get all the decks:
/*
I created the following async functions with the help of the following knowledge/resources:
https://knowledge.udacity.com/questions/480149
https://www.javatpoint.com/react-native-asyncstorage
https://react-native-async-storage.github.io/async-storage/docs/api
https://knowledge.udacity.com/questions/135724
*/
export const getDecks = async () => {
  const data = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  return JSON.parse(data);
};

// take in a single id argument and return the deck associated with that id from all decks:
export const getDeck = async (id) => {
  getDecks().then((decks) => {
    return decks[id];
  });
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
*/
export const removeDeck = async (id) => {
  const results = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    delete data[id];

    await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data));
    return data;
  }
  return {};
};
