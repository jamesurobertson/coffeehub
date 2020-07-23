import React from "react";
import styled from "styled-components";
import Garden from "./garden/Garden";
import FeaturedRoast from "./FeaturedRoast";
import ActivityLog from "./ActivityLog";

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 20px;
  width: 100%;
  .featured-roasts {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .garden-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
  }

  .profile--noroasts {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 50px 0;
  }
`;

const ProfileMain = ({ profileData: user }) => {
  return (
    <MainWrapper>
      <div> Featured Roasts</div>
      <div className="featured-roasts">
        {user.roasts.length === 0 ? (
          <div className="profile--noroasts">
            {`${user.username} doesnt' have any roasts yet :(`}
          </div>
        ) : (
          ""
        )}
        {user.roasts.slice(0, 5).map((roast, i) => {
          return <FeaturedRoast roast={roast} key={i} />;
        })}
      </div>
      <div>{user.roasts.length} Roasts in the last year</div>

      <div className="garden-container">
        <Garden roasts = {user.roasts}/>
      </div>
      {/* <ActivityLog /> */}
    </MainWrapper>
  );
};

export default ProfileMain;
