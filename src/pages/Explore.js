import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ExploreMenu from "../components/Explore/ExploreMenu.js";
import ExploreMain from "../components/Explore/ExploreMain.js";
import { client } from "../utils/index";

const ExploreWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 20px;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 830px) {
      flex-flow: column;
      align-items: center;
  }
`;

const Explore = () => {
  const { searchParam, searchType } = useParams();
  const [roastCount, setRoastCount] = useState("");
  const [userCount, setUserCount] = useState("");
  const [originCount, setOriginCount] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      (async () => {
        setLoading(true)
      const res = await client(`/explore/${searchParam}`);
      setRoastCount(res.roasts);
      setUserCount(res.users);
      setOriginCount(res.origins);
      setLoading(false)
    })();

  }, [searchParam, searchType]);

  return (
    <ExploreWrapper>
      <ExploreMenu
        searchParam={searchParam}
        roastCount={roastCount}
        userCount={userCount}
        originCount={originCount}
      />
      {loading ? '' :
      <ExploreMain searchType={searchType} searchParam={searchParam} />
  }
    </ExploreWrapper>
  );
};

export default Explore;
