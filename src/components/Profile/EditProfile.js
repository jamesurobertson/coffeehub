import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Input from "../../styles/Input";
import Button from "../../styles/Button";
import { client, ErrorMessage } from "../../utils/index";
import { UserContext } from "../../context/UserContext";

Modal.setAppElement("#root");

const ModalWrapper = styled.div`
  padding: 25px;
  display: flex;
  flex-flow: column;
  width: 550px;
  h1 {
    align-self: center;
    font-size: 20px;
  }

  .photo-upload-container {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  #photoUploadButton {
    display: none;
  }

  #photoUploadLabel {
    border: none;
    padding: 8px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.green};
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
      opacity: 0.9;
    }
  }

  .profile-image {
    width: 150px;
    height: auto;
    border-radius: 400px;
    object-fit: cover;
  }

  .input-section {
    position: relative;
    display: flex;
    flex-flow: column;
    margin-bottom: 25px;
  }

  .upload-button {
    background-color: ${(props) => props.theme.green};
    margin-top: 5px;
  }

  @media screen and (max-width: 830px) {
      width: 100%;

  }
`;

const EditProfileForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;

  p {
    color: ${(props) => props.theme.red};
    position: absolute;
    bottom: -20px;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }

  textarea {
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    padding: 10px;
    resize: none;
  }
`;

const EditProfile = ({
  setProfileData,
  profileData,
  openModal,
  closeModal,
}) => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (body) => {
    const {user, token} = await client(`/users/update`, { body, method: "PUT" });
    setUser(user);
    setProfileData({ ...profileData, ...body });
    localStorage.setItem("COFFEEHUB_ACCESS_TOKEN", token);
    history.push(`/p/${body.username}`);
    closeModal();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "0",
      borderRadius: "5px",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: "500",
    },
  };

  const validateUserName = async (value) => {
    const res = await client(`/users/validate/${value.toLowerCase()}`);
    return res;
  };

  const changePhoto = (e) => {
    const file = e.currentTarget.files[0];
    let formData;

    if (file) {
      formData = new FormData();
      formData.append("file", file);
    }
    postImage(formData);
  };

  const postImage = async (formData) => {
    if (!formData) return;
    try {
      const token = localStorage.getItem("COFFEEHUB_ACCESS_TOKEN");

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/aws/upload`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (!res.ok) throw res;

      const { img } = await res.json();
      setProfileData({ ...profileData, profileImageUrl: img });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit Profile"
    >
      <ModalWrapper>
        <h1 style={{ fontSize: "24px" }}> Edit Profile</h1>
        <div style={{ display: "flex" }}>
          <EditProfileForm onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: "flex"}}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexFlow: "column",
                  width: "100%",
                  padding: "14px 0",
                }}
              >
                <div className="input-section">
                  <label>Username</label>
                  <Input
                    name="username"
                    defaultValue={profileData.username}
                    autoComplete="off"
                    ref={register({
                      required: true,
                      validate: validateUserName,
                    })}
                  />
                  <ErrorMessage error={errors.username} />
                </div>
                <div className="input-section">
                  <label>Full Name</label>
                  <Input
                    name="fullName"
                    defaultValue={profileData.fullName}
                    ref={register({ required: true, minLength: "2" })}
                  />
                  <ErrorMessage error={errors.fullName} />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "column",
                width: "100%",
              }}
            >
              <div className="input-section">
                <label style={{ marginTop: "0" }}>Bio</label>
                <textarea
                  rows="5"
                  name="bio"
                  defaultValue={profileData.bio}
                  ref={register()}
                />
              </div>

              <div className="input-section">
                <label style={{ marginTop: "0" }}>Email</label>
                <Input
                  name="email"
                  defaultValue={profileData.email}
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                <ErrorMessage error={errors.email} />
              </div>
            </div>

            <Button type="submit">Submit</Button>
          </EditProfileForm>
          <div
            style={{
              width: "100%",
              alignItems: "center",
              marginTop: "10px",
              display: "flex",
              flexFlow: "column",
            }}
          >
            <img
              className="profile-image"
              src={profileData.profileImageUrl}
              alt="profile-avatar"
            />
            <label htmlFor="photoUploadButton" id="photoUploadLabel">
              Change Profile Picture
            </label>
            <Input
              name="profileImg"
              accept="image/*"
              type="file"
              onChange={changePhoto}
              id="photoUploadButton"
            />
          </div>
        </div>
      </ModalWrapper>
    </Modal>
  );
};

export default EditProfile;
