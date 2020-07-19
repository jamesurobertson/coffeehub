import React, { useContext } from "react";
import styled from "styled-components";
import Widget from "../../../styles/Widget";
import { RoastContext } from "../../../context/RoastContext";

const ChartWrapper = styled(Widget)`
  flex-flow: row;

  .pure-table {
    margin: 0 30px;
  }

  .notes-section {
    display: flex;
    width: 300px;
    flex-flow: column;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.borderDarker};
    border-radius: 5px;
    padding: 10px;

    h1 {
        padding-bottom: 10px;
      align-self: center;
    }
  }
`;

const Chart = () => {
  const { roastData } = useContext(RoastContext);


  return (
    <ChartWrapper>
      <div className="notes-section">
        <h1>Notes</h1>
        <ul>
          {roastData.notes.map((note) => {
            return <li key={`notes-${note.id}`}>- {note.note}</li>;
          })}
        </ul>
      </div>
      <table className="pure-table pure-table-horizontal">
        <thead>
          <tr>
            <th>{`Roaster Temp`}</th>
            <th>Energy</th>
            <th>Fan</th>
          </tr>
        </thead>
        <tbody>
          {roastData.milestones.map((ms) => {
            return (
              <tr key={`milestones-${ms.id}`}>
                <td>{ms.roastTemp}°F</td>
                <td>{(ms.heatLevel / 10) * 100}%</td>
                <td>{(ms.fanspeed / 4) * 100}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="pure-table pure-table-horizontal">
        <tbody>
          <tr>
            <td>{`TotalTime`}</td>
            <td>{roastData.totalTime}</td>
          </tr>
          <tr>
            <td>{`AmbientTemp`}</td>
            <td>{roastData.ambientTemp}</td>
          </tr>
          <tr>
            <td>Load</td>
            <td>{roastData.load} grams</td>
          </tr>
          <tr>
            <td>Yield</td>
            <td>{roastData.yield} grams</td>
          </tr>
          <tr>
            <td>FC</td>
            <td>{roastData.firstCrack}</td>
          </tr>
          {roastData.secondCrack ? (
            <tr>
              <td>SC</td>
              <td>13</td>
            </tr>
          ) : (
            <tr></tr>

          )}
        </tbody>
      </table>
    </ChartWrapper>
  );
};

export default Chart;
