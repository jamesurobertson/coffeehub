import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "../../styles/Button";
import { FiCoffee } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { UserContext } from "../../context/UserContext";
import { client } from "../../utils/index";
import { toast } from "react-toastify";
import EditProfile from "./EditProfile";

const UserDetailsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 30px;
  width: 100%;
  max-width: 312px;
  min-width: 180px;
  padding-left: 20px;

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
    flex-wrap: wrap;
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

const ProfileUserDetails = ({ setProfileData, profileData }) => {
  const { user, setUser } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);

  const followUser = async () => {
    const res = await client(`/users/follow/${profileData.username}`, {
      method: "POST",
    });
    const updatedFollowing = [...user.following, res];
    setUser({ ...user, following: updatedFollowing });
    toast.success(`Followed ${profileData.username}`);
  };

  const unfollowUser = () => {
    client(`/users/follow/${profileData.username}`, { method: "DELETE" });
    toast.success(`Unfollowed ${profileData.username}`);

    const updatedFollowing = user.following.filter(
      (follow) => follow.userFollowedId !== profileData.id
    );
    setUser({ ...user, following: updatedFollowing });
};
const editProfile = () => {
    setOpenModal(true);
};

const closeModal = () => {
    setOpenModal(false);
};

  return (
    <UserDetailsWrapper>
      <img src={profileData.profileImageUrl} alt="avatar" />
      <h1 className="profile-fullname">{profileData.fullName}</h1>
      <p className="profile-username">{profileData.username}</p>
      <p className="profile-bio">{profileData.bio}</p>
      {profileData.username === user.username ? (
        <FollowButton onClick={editProfile}>Edit Profile</FollowButton>
      ) : user.following.some(
          (user) => user.userFollowedId === profileData.id
        ) ? (
        <FollowButton onClick={unfollowUser}>Unfollow</FollowButton>
      ) : (
        <FollowButton onClick={followUser}>Follow</FollowButton>
      )}
      {openModal ? (
        <EditProfile
          setProfileData={setProfileData}
          profileData={profileData}
          openModal={openModal}
          closeModal={closeModal}
        />
      ) : (
        ""
      )}
      <div className="profile-data-numbers">
        <p>
          <BsPeopleFill className="profile-data-icon" />{" "}
          {profileData.followers.length} Followers
        </p>
        <div className="profile-data-seperator">·</div>
        <p> {profileData.following.length} Following</p>
        <div className="profile-data-seperator">·</div>
        <p>
          {" "}
          <FiCoffee className="profile-data-icon" />{" "}
          {profileData.cups.length}
        </p>
      </div>
    </UserDetailsWrapper>
  );
};

export default ProfileUserDetails;
