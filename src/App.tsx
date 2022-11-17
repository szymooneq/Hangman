import { useCallback, useEffect, useState } from "react";
import Hangman from "./Hangman";
import Keyboard from "./Keyboard";
import Word from "./Word";
import words from "./wordList.json";

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
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/) || isLoser || isWinner) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", keyDownHandler);

    return () => {
      document.removeEventListener("keypress", keyDownHandler);
    };
  }, [guessedLetters, isWinner, isLoser]);

  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        maxWidth: "800px"
      }}>
      <Hangman numberOfGuesses={incorrectLetters.length} />
      <Word
        reveal={isLoser}
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
      />
      <div
        style={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          textAlign: "center",
          color: `${isWinner ? "gold" : "red"}`
        }}>
        {isWinner && "Winner! - Refresh to try again."}
        {isLoser && "Nice Try - Refresh to try again."}
      </div>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          correctLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          incorrectLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}
