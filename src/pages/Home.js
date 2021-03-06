import React from "react";
import styled from "styled-components";
import LeftNav from "../components/LeftNav/LeftNav";
import Feed from "../components/Feed/Feed";

const HomeWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.bgSecondary};

  @media screen and (max-width: 830px) {
    flex-flow: column;
  }
`;

const Home = () => (
  <HomeWrapper>
    <LeftNav />
    <Feed />
  </HomeWrapper>
);

export default Home;
