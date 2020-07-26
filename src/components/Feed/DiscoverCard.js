import React from "react";
import styled from "styled-components";
import Button from "../../styles/Button";

const DiscoverWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  div {
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    border: 1px solid ${(props) => props.theme.border};
  }
  h1 {
    font-size: 24px;
  }

  p {
    margin: 10px 0;
  }

  button {
    font-weight: 400;
    background-color: transparent;
    color: ${(props) => props.theme.blue};
    border: 1px solid ${(props) => props.theme.border};
  }
`;

const DiscoverCard = () => {
  return (
    <DiscoverWrapper>
      <div>
        <h1>
          Dicover interesting roasts and people to populate your personal news
          feed.
        </h1>
        <p>
          Your news feed helps you keep up with new roasts that are made and
          people you follow.
        </p>
        <Button> Explore CoffeeHub</Button>
      </div>
    </DiscoverWrapper>
  );
};

export default DiscoverCard;