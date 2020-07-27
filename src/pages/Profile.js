import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileUserDetails from "../components/Profile/ProfileUserDetails";
import ProfileMain from "../components/Profile/ProfileMain";
import ProfileHeader from "../components/Profile/ProfileHeader";
import AllRoasts from "../components/Profile/AllRoasts";
import { client } from "../utils/index";
import Loader from '../components/Loader'

const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto 33px;

  .profile-main {
    width: 100%;
  }
`;

const Profile = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState("");
  const { username } = useParams();
  useEffect(() => {
    (async () => {
      const { user } = await client(`/users/${username}`);
      setProfileData(user);
      setIsLoading(false);
    })();
  }, [username]);

  if (isLoading) return <Loader/>
  return (
      <ProfileWrapper>
        <ProfileUserDetails
          setProfileData={setProfileData}
          profileData={profileData}
        />
        <div className="profile-main">
          <ProfileHeader profileData={profileData} />
          <Switch>
            <Route
              path={`/p/${profileData.username}/roasts`}
              render={() => <AllRoasts profileData={profileData} />}
            />
            <Route
              exact
              path={`/p/${profileData.username}`}
              render={() => <ProfileMain profileData={profileData} />}
            />
          </Switch>
        </div>
      </ProfileWrapper>
  );
};

export default Profile;
