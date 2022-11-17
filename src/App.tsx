import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Hangman from "./Hangman";
import Keyboard from "./Keyboard";
import Word from "./Word";
import words from "./wordList.json";

const tryAgainIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M12.75 8a4.5 4.5 0 0 1-8.61 1.834l-1.391.565A6.001 6.001 0 0 0 14.25 8A6 6 0 0 0 3.5 4.334V2.5H2v4l.75.75h3.5v-1.5H4.352A4.5 4.5 0 0 1 12.75 8z" clipRule="evenodd"/></svg>
)

function getRandomWord(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord(words));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (!guessedLetters.includes(letter)) {
        setGuessedLetters((currentLetters) => [...currentLetters, letter]);
      }
    },
    [guessedLetters]
  );

  const restartHandler = () => {
    setWordToGuess(getRandomWord(words))
    setGuessedLetters([])
  }
  
  return (
    <Container>
      <Header>Hangman</Header>
      <Hangman numberOfGuesses={incorrectLetters.length} />

      <Word
        reveal={isLoser}
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
      />

      <EndGameMessage isWinner={isWinner}>
        {isWinner && "Winner!"}
        {isLoser && "Nice Try..."}
        {(isWinner || isLoser) && <TryAgainButton onClick={restartHandler}>{tryAgainIcon}</TryAgainButton>}
      </EndGameMessage>

      <Keyboard
        disabled={isWinner || isLoser}
        correctLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        incorrectLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />

      <Footer>
        created with 💙 by <a href="https://szymondudka.xyz/" target="_blank">Szymon Dudka</a>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 100vh;
  max-width: 800px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  position: relative;;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

const Header = styled.h1`
  padding: 15px;
`

const EndGameMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props: { isWinner: boolean }) => (props.isWinner ? "#ffd900" : "red")};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const TryAgainButton = styled.button`
  aspect-ratio: 1 / 1;
  padding: .3rem;
  border: 3px solid black;
  border-radius: 1rem;
  font-size: 2rem;
  font-family: unset;
  font-family: monospace;
  text-transform: uppercase;
  font-weight: bold;
  background: none;
  color: black;
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: #F4D03F;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`

const Footer = styled.footer`
  margin: 0 auto;
  padding: 0.5rem;
  display: block;
  width: max-content;
  font-weight: 700;
  color: black;

  a {
    color: #0044ff;
    font-style: italic;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
