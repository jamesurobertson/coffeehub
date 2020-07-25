import React from "react";
import styled from "styled-components";
import SignupForm from "../components/Landing/SignupForm";
import LandingHeader from "../components/Landing/LandingHeader";
import Slogan from "../components/Landing/Slogan";

const LandingWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  background-color: ${(props) => props.theme.black};


  .banner {
  padding: 64px 0;
  margin-top: 54px;
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
      <LandingHeader login={login} signup={signup}/>
      <div className="banner">
        <Slogan />
        <SignupForm />
      </div>
    </LandingWrapper>
  );
};

export default Landing;
