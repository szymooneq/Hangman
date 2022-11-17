import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

type KeyboardProps = {
  disabled?: boolean;
  correctLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  correctLetters,
  incorrectLetters,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem"
      }}>
      {KEYS.map((key) => {
        const active = correctLetters.includes(key);
        const inActive = incorrectLetters.includes(key);

        return (
          <button
            key={key}
            disabled={active || inActive || disabled}
            className={`${styles.btn} ${active && styles.active} ${
              inActive && styles.inactive
            }`}
            onClick={() => addGuessedLetter(key)}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
