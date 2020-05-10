import React, { useEffect, useState } from "react";

const Countdown = () => {
  // COUNTDOWN
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);
  const [isActive, setIsActive] = useState(false);
  //Removes a minute from the count after every 60000 milliseconds
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setMinutes(minutes => minutes - 1);
      }, 60000);
    } else if (!isActive && minutes !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes]);
  //Removes a second from the count after every 1000 milliseconds
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
        if (seconds <= 0) {
          setSeconds(seconds => 59);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  // BUTTON CLICK FUNCTION
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setIsClicked(prevState => {
      return (prevState = !isClicked);
    });
  };

  return (
    <div className="countdown-container">
      <h2>Start your hour:</h2>
      {minutes < 0 ? (
        <h3 className="the-counter">That's a wrap!</h3>
      ) : (
        <h3 className="the-counter">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h3>
      )}
      <button className="countdown-button" onClick={handleClick}>
        Start!
      </button>
    </div>
  );
};

export default Countdown;
