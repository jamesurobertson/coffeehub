import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";
import FeedCard from '../../styles/FeedCard'

const FollowCardWrapper = styled(FeedCard)``

const FollowCard = ({ details }) => {
  if (!details) return null;
  return (
    <FollowCardWrapper>
      <img
        className="feed-card-1"
        src={details.profileImageUrl}
        alt={`${details.uername}-avatar`}
      />
      <div className="feed-card-2">
        <div>
          <Link to={`/u/${details.username}`}>{details.username}</Link> followed{" "}
          <Link to={`/u/${details.userFollowed}`}>{details.userFollowed}</Link>
        </div>

        <div className="feed-card-inner">
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "40px", height: "40px" }}
              className="feed-card-1"
              src={details.userFollowedImg}
              alt={`${details.userFollowed}-avatar`}
            />
            <div className="feed-card-inner__user-details">
              <div style={{ display: "flex" }}>
                <Link to={`/u/${details.userFollowed}`}>
                  {details.fullName}
                  <span className="user-details__username">
                    {" "}
                    {details.userFollowed}
                  </span>
                </Link>
              </div>
              <p style={{ paddingTop: "5px" }}>{details.bio}</p>
              <div className="feed-card__data-details">
                <div>{details.numRoasts} Roasts</div>
                <div>{details.numFollowers} followers</div>
              </div>
            </div>
          </div>

          <Button>Follow</Button>
        </div>
      </div>
    </FollowCardWrapper>
  );
};

export default FollowCard;
