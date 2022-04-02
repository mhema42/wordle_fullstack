import { useState } from "react";
import "./App.css";

function App() {
  let result
  let letters
  let correctWord = "wordle";
  const [text, setText] = useState("");
  const [guesses, setGuess] = useState([]);
  const [chkWord, wordle] = useState("");

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onClickOk = () => {
    setText("");
    setGuess([
      ...guesses,
      {
        word: text,
      },
    ]);
    
    if (text === correctWord) {
      wordle("Your guess is correct, congratulation!");
    }
    else {
      wordle("");

      letters = text.split("").map((letter, index) => ({
        ...index,
          letter: letter,
          status: "incorrect",
      }));

      correctWord = correctWord.split("");
    
      if (letters.length !== correctWord.length) {
        wordle("your guess must contain " + correctWord.length + " letters");
      }
      else {
          for (let i=0; i < letters.length; i++) {
              if (letters[i].letter === correctWord[i]) {
                  letters[i].status = "correct"
                  correctWord[i] = "check"
              };
          };
          letters.forEach(element => {    
              for (let j=0; j < letters.length; j++) {
                  if (element.status === "incorrect") {
                      if (element.letter === correctWord[j]) {
                          element.status = "missplaced"
                          correctWord[j] = "check"
                      };
                  };
              };
          });
          result = JSON.stringify(letters).replace(/{/g,"").replace(/}/g,"").replace(/"/g,"").replace(/letter:/g," ").replace(/status:/g," ");
          wordle(JSON.stringify(letters).replace(/{/g,"").replace(/}/g,"").replace(/"/g,"").replace(/letter:/g," ").replace(/status:/g," "));    
      };  
      
    }
    console.log(result)
    console.log(correctWord)
    console.log(letters)
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
        <span>{ chkWord }</span>
      </div>
    </div>
  );
}

export default App;