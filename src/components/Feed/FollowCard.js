import React, {useState, useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";
import FeedCard from '../../styles/FeedCard'
import {client} from '../../utils/index'
import {toast} from 'react-toastify'
import {UserContext} from '../../context/UserContext'

const FollowCardWrapper = styled(FeedCard)``

const FollowCard = ({ details }) => {
    const {user, setUser} = useContext(UserContext)
    const [followingList, setFollowingList] = useState(user.following)


    const followUser = async () => {
        const res = await client(`/users/follow/${details.userFollowed}`, {method:'POST'})
        const updatedFollowing = [...user.following, res]
        toast.success(`Followed ${details.userFollowed}`)
        setFollowingList(updatedFollowing)
    }

    const unfollowUser = () => {
        const res = client(`/users/follow/${details.userFollowed}`, {method:'DELETE'})
        toast.success(`Unfollowed ${details.userFollowed}`)
        const updatedFollowing = followingList.filter(follow => follow.userFollowedId !== details.id)
        setFollowingList(updatedFollowing)

    }
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
          <Link to={`/p/${details.username}`}>{details.username}</Link> followed{" "}
          <Link to={`/p/${details.userFollowed}`}>{details.userFollowed}</Link>
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
                <Link to={`/p/${details.userFollowed}`}>
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

          {details.id === user.id ?
      '' :
      followingList.some(user => user.userFollowedId === details.id) ?
      <Button onClick={unfollowUser}>Unfollow</Button> :
      <Button onClick={followUser}>Follow</Button> }
        </div>
      </div>
    </FollowCardWrapper>
  );
};

export default FollowCard;
