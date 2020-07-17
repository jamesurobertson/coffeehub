import React, { useState } from "react";
import styled from "styled-components";
import Widget from "../../../styles/Widget";
import Button from "../../../styles/Button";
import Input from "../../../styles/Input";

const CracksWrapper = styled(Widget)`
  flex-flow: row;
  align-items: flex-start;
  .cracks-section {
  }
`;

const CracksWidget = () => {
  const [firstCrackDone, setFirstCrackDone] = useState(false);

  return (
    <CracksWrapper>
      {firstCrackDone ? (
        ""
      ) : (
        <div className="cracks-section">
          <label htmlFor="fc">First Crack: </label>
          <Input id="fc" />

          <Button>Add</Button>
        </div>
      )}
      <div className="cracks-section">
        <label htmlFor="2c">Second Crack: </label>
        <Input id="2c" />
        <Button>Add</Button>
      </div>
    </CracksWrapper>
  );
};

export default CracksWidget;
