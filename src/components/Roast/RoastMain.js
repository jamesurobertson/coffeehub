import React, { useContext } from "react";
import styled from "styled-components";
import { RoastContext } from "../../context/RoastContext";
import Graph from "./widgets/Graph";
import Chart from "./widgets/Chart";

const RoastMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 auto;

  .roast-main__header {
    display: flex;
    justify-content: space-between;
  }

  .roast-main__bean {
    font-size: 24px;
  }

  .roast-main__description {
    font-size: 18px;
    padding-top: 5px;
  }
`;

const RoastMain = () => {
  const { roastData } = useContext(RoastContext);

  if (!roastData) return null;
  return (
    <RoastMainWrapper>
      <div className="roast-main__header">
          <div>
        <h1 className="roast-main__bean">{roastData.bean}</h1>
        <p className="roast-main__description">{roastData.description}</p>
          </div>
      <div>{new Date(roastData.createdAt).toDateString()}</div>
      </div>
      <Graph />
      <Chart />
    </RoastMainWrapper>
  );
};

export default RoastMain;
