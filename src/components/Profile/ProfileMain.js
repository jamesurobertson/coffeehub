import React from "react";
import styled from "styled-components";
import RoastGarden from "./RoastGarden";
import FeaturedRoast from "./FeaturedRoast";

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
    margin-top: 20px;
    width: 96%;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.border};
  }
`;

const ProfileMain = () => {
  const list = [1, 2, 3, 4, 5, 6];
  return (
    <MainWrapper>
      <div>
        <div> Featured Roasts</div>
        <div className="featured-roasts">
          {list.map((item) => {
            return <FeaturedRoast />;
          })}
        </div>
        <div>223 Roasts in the last year</div>

        <div className="garden-container">
          <RoastGarden />
        </div>
      </div>
    </MainWrapper>
  );
};

export default ProfileMain;
