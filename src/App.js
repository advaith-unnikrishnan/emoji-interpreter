import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning face",
  "🤩": "Star struck",
  "🤖": "Robot",
  "🐱‍👤": "Ninja cat",
  "🎶": "Musical notes",
  "🎉": "Party popper",
  "🍟": "Chips",
  "🥪": "Sandwich",
  "🎊": "Confetti ball"
};

const bookList = ["Atomic Habits", "Think and Grow Rich", "Zero to One"];

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("It is not in our database");
    }
  }

  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <div id="output">{meaning}</div>
      <ul>
        {bookList.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
