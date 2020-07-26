import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const ActivityLogWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 20px;
  .activity-header {
    display: flex;
    align-items: center;
    width: 100%;
      margin-top: 10px;
    h1 {
      font-size: 12px;
    }

    .header-bar {
      height: 2px;
      width: 100%;
      border-top: 1px solid ${(props) => props.theme.border};
    }
  }

  .activity-main {
      display: flex;
      flex-flow: column;
      margin-top: 10px;
      padding: 0 20px;
      margin-left: 9px;
      border-left: 1px solid ${(props) => props.theme.border};

    .activity-meain__header {
        color: ${(props)=> props.theme.secondaryColor};
    }

    ul {
        margin-top: 10px;
    }

    li {
        display: flex;
        align-items: center;
        padding: 5px 0;
        font-size: 14px;
        color: ${(props) => props.theme.blue};

        .roast-date {
            font-size: 12px;
            padding-left: 6px;
            color: ${(props)=> props.theme.secondaryColor};
        }
    }
  }
`;

const Months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const ActivityLog = ({ roasts }) => {
  const now = new Date();
  const month = Months[now.getMonth()];
  const year = now.getFullYear();

  const getDate = (timeString) => {
      const date = new Date(timeString)

      const month = Months[date.getMonth()];
      const day = date.getDate()

      return `${month} ${day}`
  }
  return (
    <ActivityLogWrapper>
      <div style={{fontSize: '18px'}}> Roast Activity</div>
      <div className="activity-header">
        <h1>
          {month} {year}
        </h1>
        <div className="header-bar" />
      </div>
      <div className='activity-main'>
          <div className='activity-main__header'>
            Created {roasts.length} roasts in the last month
          </div>
            <ul>
            {roasts.map(roast => {
                return (
                    <li key={roast.id}>
                        <Link to={`/r/${roast.roastUser.username}/${roast.name}`}>
                        {`${roast.roastUser.username}/${roast.name}`}
                        </Link>
                        <div className='roast-date'>
                            {getDate(roast.createdAt)}
                        </div>
                    </li>
                )
            })}

            </ul>
      </div>
    </ActivityLogWrapper>
  );
};

export default ActivityLog;
