import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Input from "../../styles/Input";
import Button from "../../styles/Button";
import {client, ErrorMessage} from '../../utils/index';

Modal.setAppElement("#root");

const ModalWrapper = styled.div`
  padding: 20px;
  display: flex;
  width: 500px;
  flex-flow: column;
  h1 {
    align-self: center;
    font-size: 20px;
  }
`;

const EditProfileForm = styled.form`
  display: flex;
  flex-flow: column;

  p {
    color: ${(props) => props.theme.red};
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }

  label {
    margin: 20px 0 13px;
  }

  input,
  textarea {
    margin-bottom: 10px;
  }

  textarea {
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    padding: 10px;
    resize: none;
  }
`;

const EditProfile = ({ profileData, openModal, closeModal }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (body) => {
      client('/users/update', { body, method: 'PUT'})
  }

  console.log(watch("example..."));

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
    const res = await client(`/users/validate/${value.toLowerCase()}`)
    return res
  }

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit Profile"
    >
      <ModalWrapper>
        <h1> Edit Profile</h1>
        <EditProfileForm onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <Input
            name="username"
            defaultValue={profileData.username}
            autoComplete="off"
            ref={register({ required: true, validate: validateUserName})}
          />
          <ErrorMessage error={errors.username} />

          <label>Full Name</label>
          <Input
            name="fullName"
            defaultValue={profileData.fullName}
            ref={register({ required: true })}
          />
          {errors.fullName && <p>This field is required</p>}
          <label>Bio</label>
          <textarea
            rows="5"
            name="bio"
            defaultValue={profileData.bio}
            ref={register()}
          />
          <label>Email</label>
          <Input
            name="email"
            defaultValue={profileData.email}
            ref={register({ required: true })}
          />
          {errors.email && <p>This field is required</p>}
          <Button type="submit">Submit</Button>
        </EditProfileForm>
      </ModalWrapper>
    </Modal>
  );
};

export default EditProfile;
