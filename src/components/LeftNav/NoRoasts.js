import React from "react";
import styled from "styled-components";
import Button from "../../styles/Button";
import { Link } from "react-router-dom";

const RoastsWrapper = styled.div`
  margin: 0 20px;
  padding: 20px 0;
  display: flex;
  flex-flow: column;
  border-bottom: 1px solid ${(props) => props.theme.border};

  .createRoast-button {
    background-color: ${(props) => props.theme.green};
    font-weight: 400;
  }

  .importRoast-button {
    background-color: transparent;
    color: ${(props) => props.theme.blue};
  }

  p {
    margin: 10px 0;
  }
`;

const NoRoasts = () => (
  <RoastsWrapper>
    <h1>Start your first roast</h1>
    <p>Ready to start roasting? Create a new roast!</p>
    <div>
      <Link className="roastContainer__page" to="/new">
        <Button className="createRoast-button">Create Roast</Button>
      </Link>
      {/* <Button className='importRoast-button'>Import a roast</Button> */}
    </div>
  </RoastsWrapper>
);

export default NoRoasts;
