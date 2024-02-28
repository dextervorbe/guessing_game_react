import React, { useState, useEffect } from "react";
import Song from "../utils/Final Fantasy Victory Fanfare - Sound Effect [HQ].mp3";

export default function Home() {
  const [number, setNumber] = useState(Math.trunc(Math.random() * 20) + 1);
  const [message, setMessage] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [guess, setGuess] = useState(0);
  const [audio, setAudio] = useState(new Audio(Song));


  // function that creates a random number between 1 to 20 for the user to guess when the user presses the Again button
  function restart() {
    audio.pause();
    setNumber(Math.trunc(Math.random() * 20) + 1);
    setScore(20);
    setMessage('Start guessing...');
    document.body.style.backgroundColor = '#222';
    audio.pause();
  }

  function handleInputChange(event) {
    const guess = parseInt(event.target.value, 10);
    setGuess(isNaN(guess) ? 0 : guess);
    console.log(guess);
    console.log(number);
  }

  //comparing the guess against the random number

  function compareNumbers() {
    if (!guess) {
      setMessage("👀 ummmm..... I do not see any numbers inputed, try again");
    } else if (guess === number) {
      setMessage("👏 You are a guessing wizard 🙌");
      audio.play();
      document.body.style.backgroundColor = 'green';

      if (score > highScore) {
        setHighScore(score);
      }
    }


    //score logic
    else if (guess !== number) {
      if(score > 1) {
        setMessage(guess > number ? '🥵 Too High' : '🥶 Too Low');
        setScore(score - 1);
      } else {
        setMessage('😇 You luck has run out Play Again?')
        setScore(0)
      }
    }
  }



  return (
    <div>
      <header>
        <audio
          id="winningAudio"
          src="../utils/Final Fantasy Victory Fanfare - Sound Effect [HQ].mp3"
        ></audio>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={restart}>
          Again!
        </button>
        <div className="number" number={number}>
          ?
        </div>
      </header>

      <main>
        <section className="left">
          <input type="number" className="guess" onChange={handleInputChange} />
          <button className="btn check" onClick={compareNumbers}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">{message}</p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highScore}</span>
          </p>
        </section>
      </main>
      <footer>© 2024 Dexter Vorbe. All rights reserved. | Website created by Dexter Vorbe</footer>
    </div>
  );
}
