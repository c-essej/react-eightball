import React, { useState } from "react";
import './EightBall.css'


const DEFAULT_ANSWERS = [
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
]

function getRandom(answers){
  let index = Math.floor(Math.random() * answers.length)

  return answers[index];
}

/**  */

function EightBall( {answers=DEFAULT_ANSWERS} ) {

  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  function handleClick(){
    let chosenMessage = getRandom(answers);
    console.log('****chosenMessage msg=', chosenMessage.msg)
    console.log('****chosenMessage color=', chosenMessage.color)

    setMessage(chosenMessage.msg);
    setColor(chosenMessage.color);
  }

  return (
    <div className='EightBall'
    style={{backgroundColor: color}}
    onClick={handleClick} >
    <p>{message}</p>
    </div>
  )
}

export default EightBall;