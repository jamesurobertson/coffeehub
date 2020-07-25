import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import SignupForm from "../components/Landing/SignupForm";
import Slogan from "../components/Landing/Slogan";

const LandingWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-top: 75px;
  background-color: ${(props) => props.theme.black};
  padding: 64px 0;


  .banner {
      display: flex;
      width: 100%;
      max-width: 1028px;
      margin: 0 auto;
      justify-content: center;
      background-repeat: no-repeat;
    background-position: center;
    position: relative;
  }
`;

const Landing = ({ login, signup }) => {
  return (
    <LandingWrapper>
      <div className="banner">
        <Slogan />
        <SignupForm />
      </div>
    </LandingWrapper>
  );
};

export default Landing;
