import React, { useContext } from "react";
import styled from "styled-components";
import { RoastContext } from "../../context/RoastContext";

const NoRoastWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 20px;
  }
`;

const NoRoast = () => {
  const { roastData } = useContext(RoastContext);

  console.log(roastData);
  return (
    <NoRoastWrapper>
      <h1>{roastData.user.username} has not finished this roast yet.</h1>
      <h1>Please check back soon!</h1>
    </NoRoastWrapper>
  );
};

export default NoRoast;
