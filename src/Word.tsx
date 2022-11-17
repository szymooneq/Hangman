type WordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function Word({
  guessedLetters,
  wordToGuess,
  reveal = false
}: WordProps) {
  /* const word = "test"
  const guessedLetters = ["e"] */

  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
      }}>
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
    </div>
  );
}
