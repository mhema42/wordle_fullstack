import { useState } from "react";
import "./App.css";

function App() {
  const [letters, letterResult] = useState([]);
  const [correctWord, setWord] = useState([]);
  const [text, setText] = useState("");
  const [guesses, setGuess] = useState([]);
  const [chkWord, wordle] = useState("");

  // choose correct word
  const words = ["", "test", "mats", "wordle"];
  const whichWord = (event) => {
    setWord(words[event.target.value]);
  };

  // input guessed word
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

    // check if guess is correct
    if (text === correctWord) {
      wordle("Your guess is correct, congratulation!");
    }
    else {
      wordle("");

      // split correctWord and guess to array
      let correctLetters = correctWord.split("");
      let letters = text.split("").map((letter, index) => ({
        ...index,
          letter: letter,
          status: "incorrect",
      }));

      // check if guess contains correct amount of letters
      if (letters.length !== correctLetters.length) {
        wordle("your guess must contain " + correctLetters.length + " letters");
      }

      // check if guess contains correct, incorrect or missplaced letters
      else {
          for (let i=0; i < letters.length; i++) {
              if (letters[i].letter === correctLetters[i]) {
                  letters[i].status = "correct"
                  correctLetters[i] = "check"
              };
          };
          letters.forEach(element => {    
              for (let j=0; j < letters.length; j++) {
                  if (element.status === "incorrect") {
                      if (element.letter === correctLetters[j]) {
                          element.status = "missplaced"
                          correctLetters[j] = "check"
                      };
                  };
              };
          });

          letterResult(letters);
          let result = JSON.stringify(letters).replace(/{/g,"").replace(/}/g,"").replace(/"/g,"").replace(/letter:/g," ").replace(/status:/g," ");
          wordle(JSON.stringify(letters).replace(/{/g,"").replace(/}/g,"").replace(/"/g,"").replace(/letter:/g," ").replace(/status:/g," "));    

          
          // console.log(result.letter[1])          
        };  
    }    
  };

  console.log(letters[0])

  //const lettersElements = 

  // render list elements of guesses
  const guessElements = letters.map((guess, index) => {
    const addGuess = () => {
      letterResult([
        ...letters.slice(0, index),
      ]);
    };

    return (
      // <li key = { guess.letter } className = { guess.letter }>
        <span className = { guess.status }>
          { guess.letter }
        </span>
      // </li>
    );
  });

  // console.log(guesses)

  // render app
  return (
    <div className="App">
      <div className="wordle">
        <h1>Welcome to Wordle</h1>
        <i>- a fantastic world of words -</i>
        <p>Begin by choosing number of letters in Word to guess for,</p>
        <p>and if it should contain only unique letters or not</p>
        <input type = "text" value= { correctWord } onChange = { whichWord } />
        <input type = "text" value= { text } onChange = { onTextChange } />
        <button onClick = { onClickOk }>OK</button>
        <ul>{ guessElements }</ul>
        <span>{ chkWord }</span>
      </div>
    </div>
  );
}

export default App;