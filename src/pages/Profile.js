import React from "react";
import styled from "styled-components";
import ProfileUserDetails from "../components/Profile/ProfileUserDetails";
import ProfileMain from "../components/Profile/ProfileMain";
import ProfileHeader from "../components/Profile/ProfileHeader";


const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;

  .profile-main {
    width: 100%;
  }
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileUserDetails />
      <div className="profile-main">
        <ProfileHeader />
        <ProfileMain />
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
