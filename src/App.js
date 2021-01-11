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

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      var meaning = emojiDictionary[userInput];
      setMeaning(meaning);
    } else {
      setMeaning("It is not in our database");
    }
  }

  function emojiClickHanlder(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Find out the meaning</h1>
      <input onChange={emojiInputHandler}></input>
      <div id="output">{meaning}</div>

      <h3>Emojis we Know</h3>
      <ul>
        {emojisWeKnow.map((item) => {
          return (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                display: "inline",
                fontSize: "1.5rem"
              }}
              key={item}
              onClick={() => {
                emojiClickHanlder(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
