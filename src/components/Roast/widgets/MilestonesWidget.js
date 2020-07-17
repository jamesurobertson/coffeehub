import React, { useContext } from "react";
import styled from "styled-components";
import { RoastContext } from "../../../context/RoastContext";
import useInput from "../../../hooks/useInput";
import { client } from "../../../utils/index";
import {toast} from 'react-toastify'
import Widget from '../../../styles/Widget'
import Button from '../../../styles/Button'
import Input from '../../../styles/Input'

const MilestoneWrapper = styled(Widget)`
  #milestone-form {
    margin-top: 10px;
    display: flex;

    input {
      margin: 5px 0;
    }


    .milestone-data-section {
      display: flex;
      flex-flow: column;
    }

    .milestone-note-section {
        display: flex;
        flex-flow: column;
        margin-left: 5px;

        textarea {
            border: 1px solid ${(props) => props.theme.border};
            padding: 5px;
            margin: 5px 0;
            height: 100%;
            resize: none;
        }
    }
  }
    .milestone-asterisk {
      color: ${(props) => props.theme.red};
    }
`;


const MilestonesWidget = () => {
  const timestamp = useInput("");
  const fanSpeed = useInput("");
  const heatLevel = useInput("");

  const { roastData } = useContext(RoastContext);

  const postMilestone = (e) => {
    e.preventDefault();
    if (!timestamp.value || !fanSpeed.value || !heatLevel.value) {
        return toast.error('Must fill in all required fields')
    }
  };
  return (
    <MilestoneWrapper>
      <h1> Milestones</h1>
      <form id="milestone-form" onSubmit={postMilestone}>
        <div className="milestone-data-section">
          <label htmlFor="milestone-timestamp">Timestamp<span className="milestone-asterisk"> *</span></label>
          <Input
            id="milestone-timestamp"
            value={timestamp.value}
            placeholder='ex. 7:30'
            onChange={timestamp.onChange}
          />
          <label htmlFor="milestone-fanSpeed">Fan Speed<span className="milestone-asterisk"> *</span></label>
          <Input
            id="milestone-fanSpeed"
            value={fanSpeed.value}
            type="number"
            onChange={fanSpeed.onChange}
          />
          <label htmlFor="milestone-heatLevel">Heat Level<span className="milestone-asterisk"> *</span></label>
          <Input
            id="milestone-heatLevel"
            value={heatLevel.value}
            type="number"
            onChange={heatLevel.onChange}
          />
        </div>

      </form>
        <Button form='milestone-form' type="submit">Add Milestone</Button>
    </MilestoneWrapper>
  );
};

export default MilestonesWidget;
