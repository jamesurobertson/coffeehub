import { diffDays, formatDate, today, oneYearAgo } from "../../../utils/garden";
import Days from "./Days";
import Months from "./Months";
import React from "react";
import styled from "styled-components";

const GardenWrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  float: right;
`;

const Graph = (props) => {
  const { roasts, setActivity } = props;

  const startDate = oneYearAgo();
  const endDate = today();
  const values = [];
  const days = diffDays(startDate, endDate);

  let week = 0;
  for (let i = 0; i <= days; i += 1) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    const day = date.getDay();
    const count = 0;

    if ((day === 0 && i !== 0) || i === 0) {
      values.push([]);
      week += 1;
    }

    values[week - 1].push({ count, date, day });
  }

  const attrs = {
    size: 12,
    space: 2,
    padX: 0,
    padY: 30,
    values,
    roasts,
    setActivity,
  };
  return (
    <GardenWrapper>
      <svg width={860} height={150}>
        <Days {...attrs} />
        <Months {...attrs} />
      </svg>
    </GardenWrapper>
  );
};

export default Graph;
