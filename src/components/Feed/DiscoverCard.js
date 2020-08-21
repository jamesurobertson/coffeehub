import React from "react";
import styled from "styled-components";

const DiscoverWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-left: calc(33vw + 20px);

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

  @media screen and (min-width: 1060px) {
    margin-left: 370px;
  }

  @media screen and (max-width: 830px) {
    margin: 20px 0;
  }
`;

const DiscoverCard = () => (
  <DiscoverWrapper>
    <div className="explore-banner">
      <h1>
        Discover interesting roasts and people to populate your personal news
        feed.
      </h1>
      <p>
        Your news feed helps you keep up with new roasts that are made and
        people you follow.
      </p>
      {/* <Button> Explore CoffeeHub</Button> */}
      <section> Search for roasts or users in the search bar above!</section>
    </div>
  </DiscoverWrapper>
);

export default DiscoverCard;
