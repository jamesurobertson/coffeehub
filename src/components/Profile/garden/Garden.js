import {
  diffDays, formatDate, today, oneYearAgo
} from '../../../utils/garden';
import Days from './Days';
import Months from './Months';
import React from 'react'
import styled from 'styled-components'

const GardenWrapper = styled.div`
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
`

const Graph = (props) => {
   const {
        data = [],
        startDate = oneYearAgo(),
        endDate = today(),
        size = 12,
        space = 2,
        padX = 0,
        padY = 30,
        roasts,
        setActivity
    } = props

  const values = [];
  const days = diffDays(startDate, endDate);
  const dataTmp = data.reduce((memo, v) => {
    memo[v.date] = v.count;
    return memo;
  }, {});

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


  const attrs = {
     values, size, space, padX, padY, roasts, setActivity
  }
  return (
      <GardenWrapper>
      <svg width={860} height={150}>
      <Days {...attrs} />
      <Months {...attrs}/>
    </svg>

      </GardenWrapper>
  );
}

export default Graph
