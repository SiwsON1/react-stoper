import Button from './components/Button/Button'
import React, { useState, useEffect } from "react";
import Timer from './components/Timer/Timer'
import styles from './styles/app.module.scss'

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);



  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className={styles.container}>
      <Timer time={time}/>
      <div className={styles.app}>
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={stopTimer} >Stop</Button>
      <Button onClick={resetTimer}>Reset</Button>
      </div>
      
    </div>
  );
}

export default App;
