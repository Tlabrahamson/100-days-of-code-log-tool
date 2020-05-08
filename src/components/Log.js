import React from "react";

const Log = () => {
  return (
    <div className="log-container">
      <h2>Log entry:</h2>
      <form className="log-form">
        <p>
          <label for="day">Day:</label>
          <input type="text" name="day" placeholder="What day are you on?" />
        </p>
        <p>
          <label for="date">Date:</label>
          <input type="text" name="date" placeholder="What is today's date?" />
        </p>
        <p>
          <label for="progress">Today's Progress:</label>
          <input
            type="text"
            name="progress"
            placeholder="What did you get done?"
          />
        </p>
        <p>
          <label for="thoughts">Thoughts:</label>
          <input type="text" name="thoughts" placeholder="How do you feel?" />
        </p>
        <p>
          <label for="link">Link to work:</label>
          <input
            type="text"
            name="link"
            placeholder="Want to link your work?"
          />
        </p>
        <button>Log it!</button>
      </form>
    </div>
  );
};

export default Log;
