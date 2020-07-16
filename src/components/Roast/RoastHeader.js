import React, {useContext} from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import ActionButton from "../ActionButton";
import {UserContext} from '../../context/UserContext'
import {RoastContext} from '../../context/RoastContext'

const RoastHeaderWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 25px 25px 0 30px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgSecondary};

  .roastheader__header {
    display: flex;
    justify-content: space-between;
  }

  .roastheader__links * {
    font-size: 20px;
    margin: 0 5px;
  }

  .roastheader__link-name {
    color: ${(props) => props.theme.blue};
  }

  .roastheader__link-roast {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
  }

  .roastheader__nav {
    display: flex;
  }

  .roastheader__nav a {
    padding: 0 15px 12px;

  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.green};
  }
`;

const RoastHeader = () => {
    const {user} = useContext(UserContext)
    const {roastData} = useContext(RoastContext)

    if (!roastData) return null
    console.log(roastData)
  return (
    <RoastHeaderWrapper>
      <div className="roastheader__header">
        <div className="roastheader__links">
          <Link
            className="roastheader__link-name"
            to={`/u/${roastData.user.username}`}
          >
            {roastData.user.username}
          </Link>
          /
          <Link className="roastheader__link-roast" to={`/u/${user.username}/${roastData.name}`}>
          {roastData.name}
          </Link>
        </div>
        <div className="roastheader__actions">
          <ActionButton action="Cup" />
        </div>
      </div>
      <div className="roastheader__nav">
        <NavLink exact activeClass="active" to="/roast/never/">
          Roast
        </NavLink>
        <NavLink activeClass="active" to="/roast/never/comments">
          Comments
        </NavLink>
      </div>
    </RoastHeaderWrapper>
  );
};

export default RoastHeader;
