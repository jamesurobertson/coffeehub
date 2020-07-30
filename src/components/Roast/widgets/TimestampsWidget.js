import React, { useState, useContext } from "react";
import styled from "styled-components";
import useInput from "../../../hooks/useInput";
import { client } from "../../../utils/index";
import Interval from "../Interval";
import { toast } from "react-toastify";
import { RoastContext } from "../../../context/RoastContext";
import Widget from "../../../styles/Widget";
import Button from "../../../styles/Button";
import Input from "../../../styles/Input";
import ConfirmEndRoast from '../ConfirmEndRoast'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const TimestampWrapper = styled(Widget)`
  height: 200px;
  flex: 0;

  .tracker__data {
    padding: 10px;
    display: flex;
    flex-flow: column;
    align-items: center;
    font-size: 50px;

    input {
      width: 50%;
      font-size: 40px;
      text-align: center;
    }
  }

  .increment-buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;

    .start-counter-button {
      background-color: ${(props) => props.theme.green};
    }
    .end-counter-button {
      background-color: ${(props) => props.theme.red};
    }
  }

  @media screen and (max-width: 830px) {
  }
`;

const TimestampsWidget = () => {
  const { roastData, setRoastData } = useContext(RoastContext);
  const temp = useInput("");
  const [time, setTime] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const [intervalsRecorded, setIntervalsRecorded] = useState([]);
  const [roastStarted, setRoastStarted] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  const addIncrement = async (e) => {
    e.preventDefault();
    const timestamp = Math.floor(time / 30) / 2;

    if (intervalsRecorded[intervalsRecorded.length - 1] === timestamp) {
      toast.error(`Wait until the next 30 second mark to record`);
      return;
    }

    const body = { roastTemp: temp.value, timestamp };
    const recordedUpdated = [...intervalsRecorded, timestamp];
    setIntervalsRecorded(recordedUpdated);
    const newTime = await client(`/timestamps/${roastData.id}`, { body });
    const newStamps = [...roastData.timestamps, newTime];
    setRoastData({ ...roastData, timestamps: newStamps });
    temp.setValue('')
  };

  const startRoast = () => {
    setShowTime(true);
    setRoastStarted(true);
  };

  const endRoast = () => {
      setOpenModal(true)
  }

  const closeModal = () => {
      setOpenModal(false)
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "0",
      borderRadius: "10px",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: "500",
    },
  };

  return (
    <TimestampWrapper>
      <div className="tracker__data">
        <label htmlFor="heat"></label>
        <Input
          id="temp"
          value={temp.value}
          onChange={temp.onChange}
          placeholder="°F"
          type="number"
        />
      </div>
      <div className="increment-buttons">
        {roastStarted ? (
          <Button onClick={endRoast} className="end-counter-button">
            End Roast
          </Button>
        ) : (
          <Button onClick={startRoast} className="start-counter-button">
            Start Roast
          </Button>
        )}
        {showTime ? (
          <Interval time={time} setTime={setTime} />
        ) : (
          <span style={{ fontSize: "40px", margin:'0 10px' }}>00:00</span>
        )}
        <Button
          onClick={addIncrement}
          className="add-increment-button"
          type="submit"
        >
          Add Temp
        </Button>
      </div>
      <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Confirm End Roast"
      >
          <ConfirmEndRoast time={time} closeModal={closeModal}/>

        </Modal>
    </TimestampWrapper>
  );
};

export default TimestampsWidget;
