import React, { useState, useContext} from "react";
import styled from "styled-components";
import Widget from "../../../styles/Widget";
import Button from "../../../styles/Button";
import Input from "../../../styles/Input";
import useInput from '../../../hooks/useInput'
import {client} from '../../../utils/index'
import {RoastContext} from '../../../context/RoastContext'
import {toast} from 'react-toastify'

const CracksWrapper = styled(Widget)`
  flex-flow: row;
  align-items: flex-start;
  .cracks-section {
  }
`;

const CracksWidget = () => {
  const [firstCrackDone, setFirstCrackDone] = useState(false);
  const firstCrack = useInput('')
  const secondCrack = useInput('')
  const {roastData} = useContext(RoastContext)

    const addFC = () => {
        if (!firstCrack.value) {
            return toast.error('You must provide a time!')
        }
        setFirstCrackDone(true)
        const body = {firstCrack: firstCrack.value}
        client(`/roasts/${roastData.id}`, {body, method: 'PUT'})
    }
    const add2C = () => {
        if (!firstCrack.value) {
            return toast.error('You must provide a time!')
        }
        const body = {secondCrack: secondCrack.value}
        client(`/roasts/${roastData.id}`, {body, method: 'PUT'})
    }
  return (
    <CracksWrapper>
      {firstCrackDone ? (
        ""
      ) : (
        <div className="cracks-section">
          <label htmlFor="fc">First Crack: </label>
          <Input
          value={firstCrack.value}
          onChange={firstCrack.onChange}
          id="fc" />

          <Button onClick={addFC}>Add</Button>
        </div>
      )}
      <div className="cracks-section">
        <label htmlFor="2c">Second Crack: </label>
        <Input
        value={secondCrack.value}
        onChange={secondCrack.onChange}
        id="2c" />
        <Button onClick={add2C}>Add</Button>
      </div>
    </CracksWrapper>
  );
};

export default CracksWidget;
