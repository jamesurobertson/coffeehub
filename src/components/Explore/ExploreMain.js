import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import RoastCard from "../Profile/RoastCard";
import { client } from "../../utils/index";
import UserCard from "./UserCard";
import NoSearchResult from "./NoSearchResult";
import { TiCoffee } from "react-icons/ti";

const ExploreMainWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-left: 20px;

  h1 {
    font-size: 20px;
    border-bottom: 1px solid ${(props) => props.theme.border};
    width: 100%;
    padding-bottom: 20px;
  }


  button {
      width: 90px;
  }
  @media screen and (max-width: 830px) {
      margin: 0;
      h1 {
          padding: 20px 10px;
      }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
display: flex;
flex-flow: column;
align-items: center;
  width: 100%;
  height: 100px;
  /* justify-content: center; */
  /* align-items: center; */
  .coffeespinning {
    animation: ${rotate} 2s linear infinite;
  }
`;

const ExploreMain = ({ searchType, searchParam }) => {
  const [searchList, setSearchList] = useState([]);
  const [resultsType, setResultsType] = useState(null);

  useEffect(() => {
    (async () => {
      const { list, type } = await client(
        `/explore/${searchType}/${searchParam}`
      );
      setSearchList(list);
      setResultsType(type);
    })();
  }, [searchParam, searchType]);

  if (searchType !== resultsType) {
    return (
      <Loader>
        <div className="coffeespinning">
          <TiCoffee size="3rem" />
        </div>
        <p>Loading...</p>
      </Loader>
    );
  }
  if (searchList.length === 0)
    return <NoSearchResult searchType={searchType} searchParam={searchParam} />;
  return (
    <ExploreMainWrapper>
      <h1>
        {" "}
        {searchList.length} {searchType} results
      </h1>
      {searchType === "roast" || searchType === "origin"
        ? searchList.map((roast) => {
            return <RoastCard key={roast.id} roast={roast} />;
          })
        : searchList.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })}
    </ExploreMainWrapper>
  );
};

export default ExploreMain;
