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

const LandingHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <div>
          <TiCoffee color="white" size="3em" />
        </div>
        <div>
          <Button className="signin-button">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button className="signup-button">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default LandingHeader;
