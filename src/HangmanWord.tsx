export default function HangmanWord() {
  const word = "test"
  const guessedLetters = ["e"]

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
      {word.split("").map((letter, id) => (
        <span key={id} style={{ borderBottom: ".1em solid black" }}>
          <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>{letter}</span>
        </span>
      ))}
    </div>
  )
}
