import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./TenziGame.css";
import Dice from "./Dice";
import Header from "./Header/Header";
import Congratulation from "./Congratulation"
import Footer from "./Footer/Footer";

export default function TenziGame() {
  const [dice, setDice] = useState(allNewDice());
  const [isWin, setIsWin] = useState(false);

  function allNewDice() {
    return new Array(10).fill(0).map(() => {
      return {
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isSelected: false,
      };
    });
  }

  let diceElements = dice.map((die) => {
    return (
      <Dice
        key={die.id}
        value={die.value}
        stick={stick}
        isSelected={die.isSelected}
        id={die.id}
      />
    );
  });

  function rollDice() {
    // setDice(allNewDice());
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isSelected
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      }),
    );
  }
  function restartGame() {
    setDice(allNewDice());
  }

  function checkWin() {
    return dice.every((die) => die.isSelected && die.value === dice[0].value);
  }

  useEffect(() => {
    setIsWin(checkWin());
  }, [dice]);

  // function stick(id)
  function stick(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isSelected: !die.isSelected } : die,
      ),
    );
  }

  return (
    <div className="App">
      <main>
        <Header />
        <div className="dice-container">{diceElements}</div>


        {isWin ? <Congratulation restartGame = {restartGame} />     : <button className="roll-button" onClick={rollDice}>Roll</button>}
        
    <Footer />
      </main>
    </div>
    
  );
}
