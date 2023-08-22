import React, { useState } from "react";
import './EightBall.css';

/** Array of stock eightball messages: {msg, color} */

const STOCK_ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/** Helper function: accepts array of message objects,
 *  returns random selection */

function getRandom(answers) {
  let index = Math.floor(Math.random() * answers.length);

  return answers[index];
}

/** Eightball generator
 *
 * Props:
 * - answers (array of objects w/ msg and color keys)
 *
 * State:
 * - message: "Think of a Question"/answer.msg
 * - color: black/answer.color
*/
//TODO: use examples

function EightBall({ answers = STOCK_ANSWERS }) {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  //TODO: combine states into answer

  function handleClick() {
    let chosenMessage = getRandom(answers);

    setMessage(chosenMessage.msg);
    setColor(chosenMessage.color);
  }

  return (
    <div className='EightBall'
      style={{ backgroundColor: color }}
      onClick={handleClick} >
      <p className='EightBall-message'>{message}</p>
    </div>
  );
}

export default EightBall;