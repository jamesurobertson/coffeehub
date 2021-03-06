import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const NoResultWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
  padding-top: 40px;

  h1 {
    padding-top: 10px;
    font-size: 20px;
  }

  @media screen and (max-width: 830px) {
    padding: 40px 20px;
    align-items: center;
    justify-content: center;
  }
`;

const NoSearchResult = ({ searchParam, searchType }) => (
  <NoResultWrapper>
    <GoSearch size="2rem" />
    <h1>We couldn't find any {searchType}s</h1>
    <h1>matching '{searchParam}'</h1>
  </NoResultWrapper>
);

export default NoSearchResult;
