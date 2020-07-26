import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RoastCard from "../Profile/RoastCard";
import { client } from "../../utils/index";
import UserCard from './UserCard'
import NoSearchResult from './NoSearchResult'

const MainWrapper = styled.div`
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
`;

const ExploreMain = ({ searchType, searchParam }) => {
  const [searchList, setSearchList] = useState([]);
  const [resultsType, setResultsType] = useState(null)

  useEffect(() => {
    (async () => {
      const { list, type } = await client(`/explore/${searchType}/${searchParam}`);
      setSearchList(list);
      setResultsType(type)
    })();
  }, [searchParam, searchType]);

    if (searchType !== resultsType) return null
    if (searchList.length === 0) return <NoSearchResult searchType={searchType} searchParam={searchParam}/>
  return (
    <MainWrapper>
      <h1>
        {" "}
        {searchList.length} {searchType} results
      </h1>
      {searchType === "roast" || searchType === "origin" ? (
        searchList.map((roast) => {
          return <RoastCard key={roast.id} roast={roast} />;
        })
      ) : (
          searchList.map(user => {
              return (
                <UserCard user={user} key={user.id}/>
          )
          })
      )}
    </MainWrapper>
  );
};

export default ExploreMain;