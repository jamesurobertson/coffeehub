import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import ActionButton from "../ActionButton";

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
  return (
    <RoastHeaderWrapper>
      <div className="roastheader__header">
        <div className="roastheader__links">
          <Link
            className="roastheader__link-name"
            to="/profile/jamesurobertson"
          >
            jamesurobertson
          </Link>
          /
          <Link className="roastheader__link-roast" to="/roast/never">
            never
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
