import styled from "styled-components";

interface WordProps {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function Word({ guessedLetters, wordToGuess, reveal = false }: WordProps) {
  return (
    <Container>
      {wordToGuess.split("").map((letter, id) => (
        <span key={id} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black"
            }}>
            {letter}
          </span>
        </span>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`