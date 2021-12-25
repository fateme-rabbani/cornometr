import React, { useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  let seconds = ("0" + (Math.floor(timer) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timer / 60) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timer / 3600)).slice(-2);

  const handleStart = () => {
    increment.current = setInterval(() => setTimer((timer) => timer + 1), 1000);
    setIsPaused(true);
    setIsActive(true);
  };
  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };
  const handleResume = () => {
    increment.current = setInterval(() => setTimer((timer) => timer + 1), 1000);
    setIsPaused(true);
  };
  const handleReset = () => {
    clearInterval(increment.current);
    setTimer(0);
    setIsActive(false);
    setIsPaused(false);
  };
  return (
    <div>
      <p>
        {seconds}: {minutes}: {hours}
      </p>
      {!isActive && !isPaused ? (
        <button onClick={handleStart}>start</button>
      ) : isPaused ? (
        <button onClick={handlePause}>pause</button>
      ) : (
        <button onClick={handleResume}>resume</button>
      )}
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Timer;
