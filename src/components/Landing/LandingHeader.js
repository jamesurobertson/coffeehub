import React from "react";
import styled from "styled-components";
import Button from "../../styles/Button";
import { TiCoffee } from "react-icons/ti";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: transparent;
  padding: 8px 0;
  z-index: 100;
`;

const HeaderInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  height: 55px;

  .signin-button {
    font-weight: bold;
    background-color: transparent;
  }

  .signup-button {
    font-weight: bold;
    margin: 0 5px;
    background-color: transparent;
    border: 1px solid white;
  }
`;

const LandingHeader = () => (
  <HeaderWrapper>
    <HeaderInner>
      <div>
        <Link to="/">
          <TiCoffee color="white" size="3em" />
        </Link>
      </div>
      <div>
        <Link to="/login">
          <Button className="signin-button">Sign in</Button>
        </Link>
        <Link to="/signup">
          <Button className="signup-button">Sign up</Button>
        </Link>
      </div>
    </HeaderInner>
  </HeaderWrapper>
);

export default LandingHeader;
