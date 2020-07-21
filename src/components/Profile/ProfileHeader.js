import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  height: 50px;
  width: 66%;
  border-bottom: 1px solid ${(props) => props.theme.border};

  .profile-tab {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .active {
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.green};
  }
`;

const ProfileHeader = (props) => {
  return (
    <HeaderWrapper>
      <NavLink
        exact
        activeclass="active"
        to={'/'}
        className="profile-tab"
      >
        Overview
      </NavLink>
      <NavLink
        activeclass="active"
        to={`/u/DanGR/roasts`}
        className="profile-tab"
      >
        Roasts
      </NavLink>
    </HeaderWrapper>
  );
};

export default ProfileHeader;
