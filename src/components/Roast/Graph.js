import React, {useState, useContext, useEffect} from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import {RoastContext} from '../../context/RoastContext'

const GraphWrapper = styled.div`
  display: flex;
  padding: 20px;
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

    const {roastData} = useContext(RoastContext)
    const {timestamps} = roastData
    const [data, setData] = useState([])

    useEffect(() => {
        const newData = []
        timestamps.forEach(stamp => {
            newData.push({time: stamp.timestamp, temp: stamp.roastTemp})
        })
        setData(newData)
    }, [roastData])

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

    if (!data) return null
      console.log(data)
  return (
    <GraphWrapper>
      <LineChart width={750} height={300} data={data}>
        <Line dot={false} type="monotone" dataKey="temp" stroke="#0366D6" allowDecimals />
        <XAxis dataKey="time" ticks={[0,1,2,3]}/>
        <YAxis type='number' domain={[75, 425]} ticks={[100, 150, 200, 250, 300, 350, 400, 450]}/>
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </GraphWrapper>
  );
};

export default Graph;
