import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RoastSetUp from "../components/Roast/RoastSetUp";
import GraphSetUp from "../components/Roast/GraphSetUp";
import RoastHeader from "../components/Roast/RoastHeader";
import RoastMain from "../components/Roast/RoastMain";
import { client } from "../utils/index";
import { RoastContext } from "../context/RoastContext";
import { UserContext } from "../context/UserContext";
import Loader from '../components/Loader'

const RoastWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 33px;
`;

const Roast = (props) => {
  const { setRoastData, roastData } = useContext(RoastContext);
  const { user } = useContext(UserContext);
  const { username, roastName } = useParams();

  useEffect(() => {
    (async () => {
      const roast = await client(`/roasts/${username}/${roastName}`);
      setRoastData(roast);
    })();
  }, [roastName, username, setRoastData]);


  if (
    !roastData ||
    roastData.name !== roastName ||
    roastData.roastUser.username !== username
  )
    return <Loader/>;
  return (
    <RoastWrapper>
      <RoastHeader />
      {roastData.totalTime || roastData.userId !== user.id ? (
        <RoastMain />
      ) : roastData.load ? (
        <GraphSetUp />
      ) : (
        <RoastSetUp />
      )}
    </RoastWrapper>
  );
};

export default Roast;
