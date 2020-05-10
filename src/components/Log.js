import React, { useState } from "react";
//Material-UI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Log = () => {
  const [day, setDay] = useState("");
  const [progress, setProgress] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [link, setLink] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const date = new Date();
  const m = date.toLocaleString("default", { month: "long" });
  const d = date.getDate();
  const y = date.getFullYear();

  const copyToClipboard = () => {
    const logContent = document.querySelector(".log-content");
    logContent.select();
    document.execCommand("copy");
  };

  return (
    <div className="log-container">
      <h2>Log entry:</h2>
      <form id="log-form" className="log-form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="day">Day:</label>
          <input
            type="text"
            name="day"
            value={day}
            onChange={e => setDay(e.target.value)}
            placeholder="What day are you on?"
          />
        </p>
        <p>
          <label htmlFor="progress">Today's Progress:</label>
          <textarea
            name="progress"
            value={progress}
            onChange={e => setProgress(e.target.value)}
            placeholder="What did you get done?"
          />
        </p>
        <p>
          <label htmlFor="thoughts">Thoughts:</label>
          <textarea
            name="thoughts"
            value={thoughts}
            onChange={e => setThoughts(e.target.value)}
            placeholder="How do you feel?"
          />
        </p>
        <p>
          <label htmlFor="link">Link to work:</label>
          <input
            type="text"
            name="link"
            value={link}
            onChange={e => setLink(e.target.value)}
            placeholder="Link to your work?"
          />
        </p>
        <button onClick={handleClickOpen}>Log it!</button>
      </form>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Copy & paste into github.com log"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <textarea
              className="log-content"
              value={`### Day ${day}: ${m} ${d}, ${y}

**Today's Progress:** ${progress}
            
**Thoughts:** ${thoughts}
            
**Link to work:** ${link}`}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={copyToClipboard}>
            Copy
          </Button>
          <Button onClick={handleClose} color="primary">
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Log;
