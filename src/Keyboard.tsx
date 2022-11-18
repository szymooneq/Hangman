import styled from "styled-components";

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

interface Keyboard {
  correctLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
}

export default function Keyboard({ correctLetters, incorrectLetters, addGuessedLetter, disabled = false }: Keyboard) {
  return (
    <Container>
      <Grid>

        {KEYS.map((key) => {
          const active = correctLetters.includes(key);
          const inActive = incorrectLetters.includes(key);

          return (
            <Key
              key={key}
              active={active}
              inActive={inActive}
              disabled={active || inActive || disabled}
              onClick={() => addGuessedLetter(key)}>
              {key}
            </Key>
          );
        })}
        
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  align-self: stretch;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: .5rem;
  width: 100%;
`

interface Key {
  active: boolean,
  inActive: boolean
}

const Key = styled.button<Key>`
  aspect-ratio: 1/1;
  width: 100%;
  border: 3px solid black;
  border-radius: 1rem;
  font-size: 2rem;
  font-family: unset;
  font-family: monospace;
  text-transform: uppercase;
  font-weight: bold;
  background: ${({ active }) => (active ? "#16A085" : "none")};
  color: ${({ active }) => (active ? "white" : "black")};
  opacity: ${({ inActive }) => (inActive ? ".3" : "1")};
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
