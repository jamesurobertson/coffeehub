import React, { useContext } from "react";
import styled from "styled-components";
import { RoastContext } from "../../../context/RoastContext";
import { useForm } from "react-hook-form";
import { client, ErrorMessage } from "../../../utils/index";
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

    p {
    color: ${(props) => props.theme.red};
    bottom: -20px;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;


const MilestonesWidget = () => {
  const { register, handleSubmit, errors } = useForm();

  const { roastData } = useContext(RoastContext);

  const postMilestone = (body) => {
    client(`/milestones/${roastData.id}`, {body})
    toast.success("Milestone recorded")
  };
  return (
    <MilestoneWrapper>
      <h1> Milestones</h1>
      <form id="milestone-form" onSubmit={handleSubmit(postMilestone)}>
        <div className="milestone-data-section">
          <label htmlFor="milestone-timestamp">Timestamp</label>
          <Input
            id="milestone-timestamp"
            placeholder='ex. 7:30'
            name='timestamp'
            ref={register()}
          />
          <label htmlFor="milestone-timestamp">Roaster Temp</label>
          <Input
            id="milestone-roastTemp"
            placeholder='ex. 360'
            name='roastTemp'
            ref={register()}
          />
          <label htmlFor="milestone-fanSpeed">Fan Speed<span className="milestone-asterisk"> *</span></label>
          <Input
            id="milestone-fanSpeed"
            type="number"
            name='fanSpeed'
            ref={register({required: true})}
          />
          <ErrorMessage error={errors.fanSpeed} />
          <label htmlFor="milestone-heatLevel">Heat Level<span className="milestone-asterisk"> *</span></label>
          <Input
            id="milestone-heatLevel"
            type="number"
            name='heatLevel'
            ref={register({required: true})}
          />
          <ErrorMessage error={errors.heatLevel} />
        </div>

      </form>
        <Button form='milestone-form' type="submit">Add Milestone</Button>
    </MilestoneWrapper>
  );
};

export default MilestonesWidget;
