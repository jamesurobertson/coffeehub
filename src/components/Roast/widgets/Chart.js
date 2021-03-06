import React, { useContext } from "react";
import styled from "styled-components";
import Widget from "../../../styles/Widget";
import { RoastContext } from "../../../context/RoastContext";
// import SaveChanges from "./SaveChanges";

const ChartWrapper = styled(Widget)`
  .notes-section {
    display: flex;
    max-width: 300px;
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

  .chart-section {
    display: "flex";
    flex-flow: "column";
    align-items: "center";
  }

  .pure-table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
  }

  .pure-table td,
  .pure-table th {
    border-left: 1px solid #cbcbcb;
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: 0.5em 1em;
  }
  .pure-table thead {
    background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
  }

  }
  .pure-table-horizontal td,
  .pure-table-horizontal th {
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #cbcbcb;
  }

  @media screen and (min-width: 830px) {
    flex-flow: row;

    .pure-table {
      margin: 0 30px;
    }
  }

  @media screen and (max-width: 830px) {
    .chart-section {
      padding-bottom: 20px;
    }
  }
`;

const Chart = () => {
  const { roastData } = useContext(RoastContext);
  //   const [editNotes, setEditNotes] = useState(false);
  //   const [editMilestones, setEditMilestones] = useState(false);
  //   const [editDetails, setEditDetails] = useState(false);

  const editNote = (e) => {
    //   console.log(e.target)
    // e.target.contentEditable = true;
    // e.target.classList.toggle("editting");
    // console.log(e.target.innerHTML);
  };
  return (
    <ChartWrapper>
      {roastData.notes.length > 0 ? (
        <div className="chart-section">
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
        <div className="chart-section">
          <table className="pure-table pure-table-horizontal">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Roast Temp</th>
                <th>Energy</th>
                <th>Fan</th>
              </tr>
            </thead>
            <tbody>
              {roastData.milestones.map((ms) => {
                return (
                  <tr onClick={editNote} key={`milestones-${ms.id}`}>
                    {ms.timestamp ? <td>{ms.timestamp}</td> : <td></td>}
                    {ms.roastTemp ? <td>{ms.roastTemp}°F</td> : <td></td>}
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
      <div className="chart-section">
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
              <td onClick={editNote}>{roastData.yieldNum} grams</td>
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
