import React, { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(Math.trunc(Math.random() * 20) + 1);

  function updateNumber() {
    setNumber(Math.trunc(Math.random() * 20) + 1) 
  }

  console.log(number)

  return (
    <header>
      <audio
        id="winningAudio"
        src="../utils/Final Fantasy Victory Fanfare - Sound Effect [HQ].mp3"
      ></audio>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again" onClick={updateNumber}>Again!</button>
      <div className="number" number={number}>?</div>
    </header>
  );
}
