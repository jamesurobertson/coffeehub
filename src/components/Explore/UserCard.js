import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const CardWrapper = styled.div`
display: flex;
padding: 20px 0;
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
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

const UserCard = ({user}) => {

    console.log(user)
  return (
    <CardWrapper>
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
          <div>0 Roasts</div>
          <div>3 followers</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default UserCard;
