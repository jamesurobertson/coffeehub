import React, {useState, useContext, useEffect} from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import {RoastContext} from '../../../context/RoastContext'
import Widget from '../../../styles/Widget'

const GraphWrapper = styled(Widget)`
  display: flex;
  border-radius: 5px;
  padding: 20px;

  h1 {
    padding-bottom: 20px;
  }

  .custom-tooltip {
      padding: 10px;
    background-color: ${(props) => props.theme.bg};
    border: 1px solid ${(props) => props.theme.border}
  }

  @media screen and (max-width: 830px) {
      /* padding: 20px */
  }

`;


const Graph = () => {

    const {roastData} = useContext(RoastContext)
    const {timestamps} = roastData
    const [dynamicWidth, setDynamicWidth] = useState(Math.min(window.innerWidth *.8, 800))
    const [data, setData] = useState([])

    useEffect(() => {
        if (timestamps.length === 0) return
        const newData = []
        timestamps.forEach(stamp => {
            newData.push({time: stamp.timestamp, temp: stamp.roastTemp})
        })
        setData(newData)
    }, [roastData, timestamps])

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth * .8 >= 800) return
            setDynamicWidth(window.innerWidth *.8)
        })
    }, [])

    const getIntroOfPage = (label) => {
        if (label === 'Page A') {
            return "Page A is about men's clothing";
        }
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (data.length === 0) return null
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
  return (
    <GraphWrapper>
      <LineChart width={dynamicWidth} height={300} data={data}>
        <Line dot={false} type="monotone" dataKey="temp" stroke="#0366D6" allowDecimals />
        <XAxis dataKey="time"/>
        <YAxis type='number' domain={[75, 425]} ticks={[100, 150, 200, 250, 300, 350, 400, 450]}/>
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </GraphWrapper>
  );
};

export default Graph;
