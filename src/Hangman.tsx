import styled from "styled-components";

const Head = styled.div`
  width: 50px; 
  height: 50px; 
  border-radius: 100%;
  border: 10px solid black;
  position: absolute;
  top: 40px;
  right: -20px;
  
  @media (min-width: 768px) {
    top: 50px;
  }
`

const Body = styled.div`
  width: 10px;
  height: 80px;
  background: black;
  position: absolute;
  top: 90px;
  right: 0;

  @media (min-width: 768px) {
    height: 100px;
    top: 100px;
  }
`

const RightArm = styled.div`
  width: 70px;
  height: 10px;
  background: black;
  position: absolute;
  top: 110px;
  right: -70px;
  rotate: -30deg;
  transform-origin: left bottom;

  @media (min-width: 768px) {
    width: 100px;
    top: 130px;
    right: -100px;
  }
`

const LeftArm = styled.div`
  width: 70px;
  height: 10px;
  background: black;
  position: absolute;
  top: 110px;
  right: 10px;
  rotate: 30deg;
  transform-origin: right bottom;

  @media (min-width: 768px) {
    width: 100px;
    top: 130px;
  }
`

const RightLeg = styled.div`
  width: 80px;
  height: 10px;
  background: black;
  position: absolute;
  top: 160px;
  right: -70px;
  rotate: 60deg;
  transform-origin: left bottom;

  @media (min-width: 768px) {
    width: 100px;
    top: 190px;
    right: -90px;
  }
`

const LeftLeg = styled.div`
  width: 80px;
  height: 10px;
  background: black;
  position: absolute;
  top: 160px;
  right: 0;
  rotate: -60deg;
  transform-origin: right bottom;

  @media (min-width: 768px) {
    width: 100px;
    top: 190px;
  }
`

const BODY_PARTS = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

interface Hangman {
  numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }:Hangman) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses).map((Component, id) => <Component key={id} />)}
      <Base4 />
      <Base3 />
      <Base2 />
      <Base1 />
    </div>
  )
}

const Base1 = styled.div`
  height: 10px;
  width: 120px;
  background: black;

  @media (min-width: 768px) {
    height: 10px;
    width: 200px;
  }
`

const Base2 = styled.div`
  margin-left: 60px;
  height: 300px;
  width: 10px;
  background: black;

  @media (min-width: 768px) {
    margin-left: 100px;
    height: 320px;
    width: 10px;
  }
`

const Base3 = styled.div`
  margin-left: 60px;
  height: 10px;
  width: 150px;
  background: black;

  @media (min-width: 768px) {
    margin-left: 100px;
    height: 10px;
    width: 200px;
  }
`

const Base4 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 10px;
  background: black;

  @media (min-width: 768px) {
    height: 50px;
  }
`
