import React, {useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";
import {UserContext} from '../../context/UserContext'
import {client} from '../../utils/index'
import {toast} from 'react-toastify'

const CardWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border};

  .feed-card-1 {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex: 0;
  }

  .feed-card-inner__user-details {
    margin-left: 15px;
    display: flex;
    flex-flow: column;
  }

  .user-details__username {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.secondaryColor};
  }

  .feed-card__data-details {
    display: flex;
    align-items: center;
    margin-top: 20px;

    div {
      font-size: 12px;
      text-align: center;
      padding-left: 6px;
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

const UserCard = ({ user }) => {
    const {user: currentUser, setUser} = useContext(UserContext)


    const followUser = async () => {
        const res = await client(`/users/follow/${user.username}`, {method:'POST'})
        const updatedFollowing = [...currentUser.following, res]
        toast.success(`Followed ${user.username}`)
        setUser({...currentUser, following: updatedFollowing})
    }

    const unfollowUser = () => {
        client(`/users/follow/${user.username}`, {method:'DELETE'})
        toast.success(`Unfollowed ${user.username}`)
        const updatedFollowing = currentUser.following.filter(follow => follow.userFollowedId !== user.id)
        setUser({...currentUser, following: updatedFollowing})

    }
  return (
    <CardWrapper>
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "40px", height: "40px" }}
          className="feed-card-1"
          src={user.profileImageUrl}
          alt={`${user.username}-avatar`}
        />

        <div className="feed-card-inner__user-details">
          <div style={{ display: "flex" }}>
            <Link to={`/p/${user.username}`}>
              {user.fullName}
              <span className="user-details__username"> {user.username}</span>
            </Link>
          </div>

          <p style={{ paddingTop: "5px" }}>{user.bio}</p>
          <div className="feed-card__data-details">
            <div>{user.numRoasts} Roasts</div>
            <div>{user.numFollowers} Followers</div>
          </div>
        </div>
      </div>
      {currentUser.following.some(cUser => cUser.userFollowedId === user.id) ?
      <Button onClick={unfollowUser}>Unfollow</Button> :
      <Button onClick={followUser}>Follow</Button>}
    </CardWrapper>
  );
};

export default UserCard;
