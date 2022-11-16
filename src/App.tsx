import { useState } from "react"
import HangmanDrawing from "./HangmanDrawing"
import HangmanWord from "./HangmanWord"
import Keyboard from "./Keyboard"
import words from "./wordList.json"

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return "test"
    // return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>(["g"])

  const incorrectLetters = guessedLetters.filter(letter => (
    !wordToGuess.includes(letter)
  ))

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
        <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard />
        </div>
    </div>
  )
}
