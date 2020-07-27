import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const MenuWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 161px;
  min-width: 180px;
  max-width: 230px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(149,157,165,.15)!important;

  .menu-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    font-size: 14px;
    padding: 12px;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }

  .menu-row:hover {
      background-color: rgba(0,0,0,.05)
  }

  .menu-last {
    border-bottom: none;
  }

  .type-count {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border-radius: 15px;
      color: white;
      background-color: ${(props) => props.theme.green}
  }
`;

const ExploreMenu = ({ searchParam, roastCount, userCount, originCount }) => {

  return (
    <MenuWrapper>
        <Link to={`/explore/${searchParam}/roast`}>
      <div className="menu-row">
        <div className="menu-type">Roasts</div>
        <div className="type-count">{roastCount}</div>
      </div>
      </Link>
      <Link to={`/explore/${searchParam}/user`}>
      <div className="menu-row">
        <div className="menu-type">Users</div>
        <div className="type-count">{userCount}</div>
      </div>
      </Link>
      <Link to={`/explore/${searchParam}/origin`}>
      <div className="menu-row menu-row-last">
        <div className="menu-type">Origins</div>
        <div className="type-count">{originCount}</div>
      </div>
      </Link>
    </MenuWrapper>
  );
};

export default ExploreMenu;
