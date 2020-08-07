import React from "react";
import styled from "styled-components";

const SloganWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  margin: 0 24px;
  /* padding: 20px;
  background-color: RGBA(47, 47, 47, .5);
  border-radius: 5px; */

  h1 {
    font-size: 64px;
    color: white;
    /* text-shadow: -1px 1px 0 #2f2f2f,
                  1px 1px 0 #2f2f2f,
                 1px -1px 0 #2f2f2f,
                -1px -1px 0 #2f2f2f; */
  }

  p {
    padding-top: 20px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    /* text-shadow: -1px 1px 0 #2f2f2f,
                  1px 1px 0 #2f2f2f,
                 1px -1px 0 #2f2f2f,
                -1px -1px 0 #2f2f2f; */
  }
`;

const Landing = () => (
  <SloganWrapper>
    <h1> Built for coffee roasting</h1>
    <p>
      CoffeeHub is a platform for aiding you in all of your roasting needs. From
      finding different roast profiles, to tools to help you during the roast,
      CoffeeHub is built for you.
    </p>
  </SloganWrapper>
);

export default Landing;
