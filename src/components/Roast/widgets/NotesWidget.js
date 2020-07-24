import React, {useContext} from "react";
import styled from "styled-components";
import Widget from "../../../styles/Widget";
import Button from "../../../styles/Button";
import Input from "../../../styles/Input";
import {client, ErrorMessage} from '../../../utils/index'
import {RoastContext} from '../../../context/RoastContext'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form";

const NotesWrapper = styled(Widget)`
  textarea {
    border: 1px solid ${(props) => props.theme.border};
    padding: 5px;
    margin: 5px 0;
    height: 100%;
    resize: none;
  }

  input {
      margin: 5px 0;
    }

    form {
        display: flex;
        flex-flow: column;
    }

    p {
    color: ${(props) => props.theme.red};
    bottom: -20px;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;

const AddNoteButton = styled(Button)``;

const NotesWidget = () => {
    const {roastData} = useContext(RoastContext)
    const { register, handleSubmit, errors } = useForm();


const addNote = (body) => {
    client(`/notes/${roastData.id}`, {body})
    toast.success('Note recorded')
}
  return (
    <NotesWrapper>
        <form onSubmit={handleSubmit(addNote)}>

      <label htmlFor="milestone-note">Notes</label>
      <textarea
        id="milestone-note"
        name='note'
        rows='8'
        ref={register({required: true})}
        />
        <ErrorMessage error={errors.note} />

      <label htmlFor="note-input">Timestamp</label>
      <Input id="note-input" placeholder="ex. 7:30" name='timestampe'
      ref={register()}
      />

      <AddNoteButton type='submit'>Add Note</AddNoteButton>
      </form>
    </NotesWrapper>
  );
};

export default NotesWidget;
