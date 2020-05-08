import React, { useState } from "react";

const Countdown = () => {
  // BUTTON CLICK FUNCTION
  const [isClicked, setIsClicked] = useState(false);
  // COUNTDOWN
  //   const [startTime] = useState(new Date());
  //   const [counter, setCounter] = useState(3600);
  const handleClick = () => {
    setIsClicked(prevState => {
      //countDown();
      return (prevState = !isClicked);
    });
  };
  //   const countDown = () => {
  //     setInterval(() => {
  //       setCounter(
  //         3600 - (new Date().getUTCSeconds() - startTime.getUTCSeconds())
  //       );
  //     }, []);
  //   };

  return (
    <div className="countdown-container">
      <h2>Start your hour:</h2>
      <h3 className="the-counter">01:00:00</h3>
      <button className="countdown-button" onClick={handleClick}>
        Start!
      </button>
    </div>
  );
};

export default Countdown;
