import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [guesses, setGuess] = useState([
  ]);
  const [letters, setLetter] = useState([
  ]);

  const onTextChange = (event) => {
    setText(event.target.value);
    
    setLetter([
      ...letters,
      {
        letter: letters,
        test: "",
      },
    ]);
  };

  console.log(letters)


  const onClickOk = () => {
    setText("");
    setGuess([
      ...guesses,
      {
        word: text,
        test: "guess",
      },
    ]);
  };

  const guessElements = guesses.map((guess, index) => {
    const addGuess = () => {
      setGuess([
        ...guesses.slice(0, index),
      ]);
    };

    return (
      <li key = { guess.word } className = { guess.word }>
        <span className = "label">
          { guess.word }
        </span>
      </li>
    );
  });

  return (
    <div className="App">
      <div className="wordle">
        <h1>Welcome to Wordle</h1>
        <i>- a fantastic world of words -</i>
        <p>Begin by choosing number of letters in Word to guess for,</p>
        <p>and if it should contain only unique letters or not</p>
        <input type = "text" value= { text } onChange = { onTextChange } />
        <button onClick = { onClickOk }>OK</button>
        <ul>{ guessElements }</ul>
      </div>
    </div>
  );
}

export default App;