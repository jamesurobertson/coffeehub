import React, { useContext } from "react";
import styled from "styled-components";
import { TiCoffee } from "react-icons/ti";
import Button from '../styles/Button'

import SignupForm from "../components/Landing/SignupForm";

const SignupWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;

  .login-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        border: 1px solid ${(props) => props.theme.border};
        border-radius: 5px;
        padding: 8px;
        font-size: 14px;
        width: 100%;
        max-width: 430px;

        button {
            background-color: transparent;
            color: ${(props) => props.theme.blue};
            font-weight: 400;

        }
    }

    h1 {
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 20px;
  }

`;

const Signup = ({ login }) => {
  return (
    <SignupWrapper>
      <TiCoffee size="4rem" />
      <h1> Sign up for CoffeeHub</h1>
      <SignupForm />
      <div className="login-container">
          Already have an account?
        <Button onClick={login}> Sign in </Button>
      </div>
    </SignupWrapper>
  );
};

export default Signup;
