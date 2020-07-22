import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  height: 50px;
  width: 100%;
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

const ProfileHeader = ({profileData: user}) => {
  return (
    <HeaderWrapper>
      <NavLink
        exact
        activeclass="active"
        to={`/p/${user.username}`}
        className="profile-tab"
      >
        Overview
      </NavLink>
      <NavLink
        activeclass="active"
        to={`/p/${user.username}/roasts`}
        className="profile-tab"
      >
        Roasts
      </NavLink>
    </HeaderWrapper>
  );
};

export default ProfileHeader;
