import React from "react";
import styled from "styled-components";
import {today, oneYearAgo, diffDays} from '../../utils/garden'
import Graph from './garden/Garden'
const RoastGardenWrapper = styled.div`
  border-radius: 5px;
  padding: 10px;

  .day {
    shape-rendering: geometricPrecision;
  }

  .month {
    font-size: 12px;
    fill: "darkBrown";
  }

  .wday {
    font-size: 12px;
  }

`;

const RoastGarden = () => {
  const year = Array(52).fill(0);
  const days = Array(7).fill(0);

  const numDays = diffDays(oneYearAgo(), today())
  console.log(numDays)

  return (
    <RoastGardenWrapper>
    <div id='svg-graph'/>
  <svg width="870" height="148" className="roast-garden">
    <g transform={`translate(35,20)`}>
      {year.map((week, i) => {
        return (
          <g key={`${i}`} tranform={`translate(${i * 16}, 0)`}>
            {days.map((day, j) => {
              return (
                <rect
                  key={`day-${i}${j}`}
                  className="day"
                  rx="50"
                  width="10"
                  height="15"
                  x={`${i * 16}`}
                  y={`${j * 17}`}
                  fill={Math.random() < 0.8 ? "#9be9a8" : "#815839"}
                >
                  <title>{`i: ${i} j:${j}`}</title>
                </rect>
              );
            })}
          </g>
        );
      })}


      <text x={`${848 * 0.0833 - 68}`} y="-8" className="month">
        Jan
      </text>
      <text x={`${848 * (0.0833 * 2) - 75}`} y="-8" className="month">
        Feb
      </text>
      <text x={`${848 * (0.0833 * 3) - 83}`} y="-8" className="month">
        Mar
      </text>
      <text x={`${848 * (0.0833 * 4) - 88}`} y="-8" className="month">
        Apr
      </text>
      <text x={`${848 * (0.0833 * 5) - 95}`} y="-8" className="month">
        May
      </text>
      <text x={`${848 * (0.0833 * 6) - 103}`} y="-8" className="month">
        June
      </text>
      <text x={`${848 * (0.0833 * 7) - 110}`} y="-8" className="month">
        July
      </text>
      <text x={`${848 * (0.0833 * 8) - 115}`} y="-8" className="month">
        Aug
      </text>
      <text x={`${848 * (0.0833 * 9) - 120}`} y="-8" className="month">
        Sept
      </text>
      <text x={`${848 * (0.0833 * 10) - 125}`} y="-8" className="month">
        Oct
      </text>
      <text x={`${848 * (0.0833 * 11) - 130}`} y="-8" className="month">
        Nov
      </text>
      <text x={`${848 * (0.0833 * 12) - 68}`} y="-8" className="month">
        Dec
      </text>
      <text text-anchor="start" className="wday" dx="-28" dy="11">
        Sun
      </text>
      <text text-anchor="start" className="wday" dx="-30" dy="28">
        Mon
      </text>
      <text text-anchor="start" className="wday" dx="-27" dy="45">
        Tue
      </text>
      <text text-anchor="start" className="wday" dx="-32" dy="62">
        Wed
      </text>
      <text text-anchor="start" className="wday" dx="-32" dy="79">
        Thur
      </text>
      <text text-anchor="start" className="wday" dx="-22" dy="96">
        Fri
      </text>
      <text text-anchor="start" className="wday" dx="-27" dy="112">
        Sat
      </text>
    </g>
  </svg>
    </RoastGardenWrapper>
  );
};

export default RoastGarden;
