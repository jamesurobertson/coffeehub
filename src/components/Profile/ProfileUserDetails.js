import React from "react";
import styled from "styled-components";
import Button from "../../styles/Button";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

const UserDetailsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 30px;
  width: 100%;
  max-width: 312px;
  min-width: 180px;

  img {
    width: 90%;
    max-width: 280px;
    height: auto;
    border-radius: 50%;
  }

  .profile-fullname {
    font-size: 26px;
    padding-top: 20px;
  }

  .profile-username {
    font-size: 20px;
    color: ${(props) => props.theme.secondaryColor};
  }

  .profile-bio {
    padding-top: 20px;
  }

  .profile-data-numbers {
      display: flex;
      align-items: center;
      font-size: 12px;
      p {
          display: flex;
          align-items: flex-start;
        color: ${(props) => props.theme.secondaryColor};
      }

      .profile-data-seperator {
          margin: 0 5px;
      }

      .profile-data-icon {
          margin-right: 6px;
      }
  }
`;

const FollowButton = styled(Button)`
  margin: 20px 0;
  width: 50%;
  background-color: ${(props) => props.theme.green};
`;

const ProfileUserDetails = ({profileData: user}) => {
    console.log(user)
  return (
    <UserDetailsWrapper>
      <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="avatar" />
      <h1 className="profile-fullname">{user.fullName}</h1>
      <p className="profile-username">{user.username}</p>
      <p className="profile-bio">
        {user.bio}
      </p>
      <FollowButton>Follow</FollowButton>
      <div className="profile-data-numbers">
        <p>
          <BsPeopleFill className='profile-data-icon'/>{' '}{user.followers.length} Followers
        </p>
        <div className='profile-data-seperator'>
            ·
            </div>
        <p> {user.following.length} Following</p>
        <div className='profile-data-seperator'>

            ·
            </div>
        <p>
          {" "}
          <AiOutlineCoffee className='profile-data-icon' /> {user.cups.length}
        </p>
      </div>
    </UserDetailsWrapper>
  );
};

export default ProfileUserDetails;
