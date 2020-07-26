import React, { useState, useContext } from "react";
import styled from "styled-components";
import Widget from "../../../styles/Widget";
import { RoastContext } from "../../../context/RoastContext";
import SaveChanges from "./SaveChanges";

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

  .note-li {
    padding: 5px 0;
  }

  .editting {
    background-color: white;
    border: 1px solid black;
  }
`;

const Chart = () => {
  const { roastData } = useContext(RoastContext);
  const [editNotes, setEditNotes] = useState(false);
  const [editMilestones, setEditMilestones] = useState(false);
  const [editDetails, setEditDetails] = useState(false);

  const editNote = (e) => {
    //   console.log(e.target)
    // e.target.contentEditable = true;
    // e.target.classList.toggle("editting");
    // console.log(e.target.innerHTML);
  };
  return (
    <ChartWrapper>
      {roastData.notes.length > 0 ? (
          <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>

        <div className="notes-section">
          <h1>Notes</h1>
          <ul>
            {roastData.notes.map((note) => {
              return (
                <li
                  onClick={editNote}
                  className="note-li"
                  key={`notes-${note.id}`}
                >
                  - {note.note}
                </li>
              );
            })}
          </ul>
        </div>
          {/* <SaveChanges tableType={'notes'}/> */}
          </div>
      ) : (
        ""
      )}
      {roastData.milestones.length > 0 ? (
          <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
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
                <tr onClick={editNote} key={`milestones-${ms.id}`}>
                  <td>{ms.roastTemp}°F</td>
                  <td>{(ms.heatLevel / 10) * 100}%</td>
                  <td>{(ms.fanspeed / 4) * 100}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <SaveChanges tableType={'milestones'}/> */}
        </div>
      ) : (
        ""
      )}
          <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>

      <table className="pure-table pure-table-horizontal">
        <tbody>
          <tr>
            <td>{`TotalTime`}</td>
            <td onClick={editNote}>{roastData.totalTime}</td>
          </tr>
          <tr>
            <td>{`AmbientTemp`}</td>
            <td onClick={editNote}>{roastData.ambientTemp}</td>
          </tr>
          <tr>
            <td>Load</td>
            <td onClick={editNote}>{roastData.load} grams</td>
          </tr>
          <tr>
            <td>Yield</td>
            <td onClick={editNote}>{roastData.yield} grams</td>
          </tr>
          {roastData.firstCrack ? (
            <tr>
              <td>FC</td>
              <td onClick={editNote}>{roastData.firstCrack}</td>
            </tr>
          ) : (
            ""
          )}
          {roastData.secondCrack ? (
            <tr>
              <td>SC</td>
              <td onClick={editNote}>{roastData.secondCrack}</td>
            </tr>
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      {/* <SaveChanges tableType={'details'}/> */}
      </div>
    </ChartWrapper>
  );
};

export default Chart;
