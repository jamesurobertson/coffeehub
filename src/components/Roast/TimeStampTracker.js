import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { client } from "../../utils/index";
import Interval from './Interval'

const TrackerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.borderDarker};

  .tracker__stepper {
    display: flex;
    justify-content: center;
  }

  .tracker__data-container {
    display: flex;
    .tracker__data {
      padding: 10px;
      display: flex;
      flex-flow: column;
      align-items: center;
      font-size: 50px;

      label {
        font-size: 50px;
      }
      input {
        border: none;
        border-radius: 5px;
        width: 50%;
        border: 1px solid ${(props) => props.theme.border};
        margin: auto;
        text-align: center;
      }
    }
  }

  .start-counter-button, .add-increment-button {
    background-color: ${(props) => props.theme.green};
    padding: 8px;
    color: white;
    border: none;
    font-size: 28px;
  }

  .add-increment-button {
      background-color: ${(props) => props.theme.blue}
  }

  .increment-buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 40px;
  }
`;

const TimeStampTracker = () => {
  const temp = useInput("");
  const fanSpeed = useInput("");
  const heatLevel = useInput("");
  const [time, setTime] = useState(0)
  const [showTime, setShowTime] = useState(false);

  const addIncrement = async (e) => {
    e.preventDefault();
    const body = { roastTemp: temp.value, timestamp: "0" };
    console.log(body);
  };

    const startTimer = () => {
        setShowTime(true)
    }

  return (
    <TrackerWrapper>
      <div className="tracker__stepper">-----Tracker Stepper-----</div>
      <form id="increment_form" onSubmit={addIncrement}>
        <div className="tracker__data-container">
          <div className="tracker__data">
            <label htmlFor="heat">Temp</label>
            <input
              id="temp"
              value={temp.value}
              type="number"
              onChange={temp.onChange}
            />
          </div>
        </div>
      </form>
      <div className="increment-buttons">
        <button onClick={startTimer} className="start-counter-button">
          Start Timer
        </button>
      {showTime ? <Interval time={time} setTime={setTime} /> : '00:00'}
        <button className='add-increment-button' form="increment_form" type="submit">
          Add Increment
        </button>
      </div>
    </TrackerWrapper>
  );
};

export default TimeStampTracker;
