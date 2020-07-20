import {
  diffDays, formatDate, today, oneYearAgo, rectColor
} from '../../../utils/garden';
import Days from './Days';
import React from 'react'
import styled from 'styled-components'

const GardenWrapper = styled.div`
background-color: ${(props) => props.theme.bg};
`

const Graph = (props) => {
   const {
        data = [],
        colorFun = rectColor,
        startDate = oneYearAgo(),
        endDate = today(),
        size = 12,
        space = 1,
        padX = 0,
        padY = 0,
    } = props

  const values = [];
  const days = diffDays(startDate, endDate);
  const dataTmp = data.reduce((memo, v) => {
    memo[v.date] = v.count;
    return memo;
  }, {});
  // Compute values
  let group = 0;
  for (let i = 0; i <= days; i += 1) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    const day = date.getDay();
    const count = dataTmp[formatDate(date)] || 0;

    if ((day === 0 && i !== 0) || i === 0) {
      values.push([]);
      group += 1;
    }

    values[group - 1].push({ count, date, day });
  }

  const s = size + space * 2;
  const width = (group * s) + (padX * 2);
  const height = 7 * s + padY + 10;
  const box = `0 0 ${width} ${height}`;

  const attrs = {
     values, size, space, colorFun, padX, padY
  };
  return (
      <GardenWrapper>
      <svg width={width} height={height}>
      <Days {...attrs} />
    </svg>

      </GardenWrapper>
  );
}

export default Graph
