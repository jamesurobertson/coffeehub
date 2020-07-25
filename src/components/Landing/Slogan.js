import React from "react";
import styled from "styled-components";

const SloganWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  margin: 0 24px;

  h1 {
    font-size: 64px;
    color: white;
  }

  p {
      padding-top: 20px;
      font-size: 20px;
      color: hsla(0,0%,100%,.6)

  }
`;

const Landing = ({ login, signup }) => {
  return (
    <SloganWrapper>
      <h1> Built for coffee roasters</h1>
      <p>
        CoffeeHub is a platform for aiding you in all of your roasting
        needs. From finding different roast profiles, to tools to help you during the roast, CoffeeHub is built for you.
      </p>
    </SloganWrapper>
  );
};

export default Landing;
