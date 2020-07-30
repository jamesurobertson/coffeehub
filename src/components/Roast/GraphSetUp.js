import React from "react";
import styled from "styled-components";
import Graph from "./widgets/Graph";
import TimestampsWidget from "./widgets/TimestampsWidget";
import MilestonesWidget from "./widgets/MilestonesWidget";
import NotesWidget from "./widgets/NotesWidget";
import CracksWidget from "./widgets/CracksWidget";

const GraphSetUpWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .graph-widget-section {
    max-width: 840;
    display: flex;
    justify-content: center;
    margin: 0 20px;
  }

  @media screen and (max-width: 830px) {
      .graph-widget-section {
          flex-flow: column;
      }
  }
`;

const GraphSetUp = () => {
  return (
    <GraphSetUpWrapper>
      <div className="graph-widget-section">
        <Graph />
      </div>
      <div className="graph-widget-section">
        <section style={{display: 'flex', flexFlow: 'column'}}>
          <TimestampsWidget />
          <CracksWidget />
        </section>
        <MilestonesWidget />
        <NotesWidget />
      </div>
    </GraphSetUpWrapper>
  );
};

export default GraphSetUp;
