import React from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const GraphWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 20px auto;
  padding: 20px 0 ;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  background-color: ${(props) => props.theme.bgSecondary};

  h1 {
    padding-bottom: 20px;
  }

  .custom-tooltip {
      padding: 10px;
    background-color: ${(props) => props.theme.bg};
    border: 1px solid ${(props) => props.theme.border}
  }
`;


const Graph = () => {

    const data = [
      { time: "0", temp: 210 },
      { time: ".5", temp: 130 },
      { time: "1", temp: 135 },
      { time: "1.5", temp: 145 },
      { time: "2", temp: 155 },
      { time: "2.5", temp: 175 },
      { time: "3", temp: 200 },
      { time: "3.5", temp: 225 },
      { time: "4", temp: 250 },
      { time: "4.5", temp: 262 },
      { time: "5", temp: 275 },
      { time: "5.5", temp: 287 },
      { time: "6", temp: 290 },
      { time: "6.5", temp: 300 },
      { time: "7", temp: 310 },
      { time: "7.5", temp: 325 },
      { time: "8", temp: 330 },
      { time: "8.5", temp: 340 },
      { time: "9", temp: 350 },
      { time: "9.5", temp: 360 },
      { time: "10", temp: 380 },
      { time: "10.5", temp: 390 },
      { time: "11", temp: 400 },
      { time: "11.5", temp: 405 },
      { time: "12", temp: 410 },
    ];

    const getIntroOfPage = (label) => {
        if (label === 'Page A') {
            return "Page A is about men's clothing";
        } if (label === 'Page B') {
            return "Page B is about women's dress";
      } if (label === 'Page C') {
          return "Page C is about women's bag";
      } if (label === 'Page D') {
          return 'Page D is about household goods';
      } if (label === 'Page E') {
          return 'Page E is about food';
      } if (label === 'Page F') {
          return 'Page F is about baby food';
        }
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} minutes : ${payload[0].value} °F`}</p>
              <p className="intro">{getIntroOfPage(label)}</p>
            </div>
          );
        }

        return null;
      };
  return (
    <GraphWrapper>
      <LineChart width={750} height={300} data={data}>
        <Line dot={false} type="monotone" dataKey="temp" stroke="#0366D6" allowDecimals />
        <XAxis dataKey="time" />
        <YAxis type='number' domain={[75, 425]} ticks={[100, 150, 200, 250, 300, 350, 400, 450]}/>
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </GraphWrapper>
  );
};

export default Graph;
