# Mobile Flashcards

Mobile Flashcards is a mobile App for Android and iOS that allows users to study collections of flashcards.
The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

Mobile Flashcards is part of my React Nanodegree by Udacity.

This app was built with React, React-Native, Redux, React-Redux, Expo, React-Native-Paper, Styled-Components and AsyncStorage to simulate API calls.

## Summary

- [Getting Started](#getting-started)
- [Platform](#platform)
- [Functionalities](#Functionalities)
- [Important info about the DATA](#important-info-about-the-DATA)
- [Create React App](#create-react-app)
- [License](#license)

## Getting started

Do the following to get started:

- install project dependencies with `yarn install`.
- start the development server with `expo start`
- use the expo app on your mobile device or
- use an emulator (just follow the steps expo is displaying)

## Platform

This app has only been tested on an Android phone and Android Emulator using the Expo app and Android Emulator.

## Functionalities

- Create a deck which can hold an unlimited number of cards.
- Add a card to a specific deck.
- Start a quiz on a specific deck.
- Toggle a button to reveal the answer.
- Select Correct/Incorrect for each question of the quiz.
- Receive the score once the quiz is completed
- Receive a daily notification to remind to study if users haven't already completed a quizz.

## Important info about the DATA

The structure of the data provided implies that all the card answers will be true (correct based on the question notice that even during creation of a question you are asked to provide the answer). That means, if you just click correct all through you will at the end get a score of 100% correct.
The not correct option is just a distraction to check whether the person reading actually can make a difference.

This is the start-data:

```
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License

MIT License - see the [LICENSE.md](LICENSE.md) file for
details
