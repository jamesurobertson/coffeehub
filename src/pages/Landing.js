import React from "react";
import styled from "styled-components";
import SignupForm from "../components/Landing/SignupForm";
import LandingHeader from "../components/Landing/LandingHeader";
import Slogan from "../components/Landing/Slogan";

const LandingWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;

  .background-img {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      position: absolute;
    }

    .black-overlay{
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: rgba(0,0,0, .2);
    }
  }
  .banner {
    padding: 64px 0;
    display: flex;
    width: 100%;
    height: 100vh;
    max-width: 1028px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 690px) {
        flex-flow: column;
        padding: 20px;
    }
  }

  .landing-about {
      height: 50vh;
  }
`;

const Landing = ({ login, signup }) => {
  return (
    <LandingWrapper>
      <LandingHeader login={login} signup={signup} />
      <div className="background-img">
        <img src="./coffee1.jpg" alt="coffee-roast" />
        <div className='black-overlay'></div>
        <div className="banner">
          <Slogan />
          <SignupForm />
        </div>
      </div>
    </LandingWrapper>
  );
};

export default Landing;
