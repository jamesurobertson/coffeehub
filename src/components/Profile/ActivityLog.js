import React from "react";
import styled from "styled-components";

const ActivityLogWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 20px;
`;

const ActivityLog = () => {
  return(
  <ActivityLogWrapper>
      <div> Roast Activity</div>
  </ActivityLogWrapper>)
};

export default ActivityLog;
