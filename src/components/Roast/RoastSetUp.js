import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RoastSetUpForm from "./RoastSetUpForm";

const RoastSetUpWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;

  h1 {
    font-size: 28px;
    padding-bottom: 10px;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

`;

const RoastSetUpHeader = styled.section`
  display: flex;
  margin: 20px auto;
  width: 70%;
  flex-flow: column;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.borderDarker};
  background-color: ${(props) => props.theme.bg};
`;

const RoastSetUp = () => {
  return (
    <RoastSetUpWrapper>
      <RoastSetUpHeader>
        <h1>Quck setup</h1>
        <p>
          If you haven't started your roast yet, fill out the form below to get
          started. Otherwise,{" "}
          <Link to="/roast/upload">
            click here to upload data on an exisiting roast.
          </Link>
        </p>
      </RoastSetUpHeader>
      <RoastSetUpForm />
    </RoastSetUpWrapper>
  );
};

export default RoastSetUp;
