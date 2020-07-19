import React, {useContext} from "react";
import styled from "styled-components";
import useInput from "../../../hooks/useInput";
import Widget from "../../../styles/Widget";
import Button from "../../../styles/Button";
import Input from "../../../styles/Input";
import {client} from '../../../utils/index'
import {RoastContext} from '../../../context/RoastContext'
import {toast} from 'react-toastify'

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
`;

const AddNoteButton = styled(Button)``;

const NotesWidget = () => {
  const note = useInput("");
  const timestamp = useInput("");
  const {roastData} = useContext(RoastContext)


const addNote = () => {
    console.log('add note')
    if (!note.value) {
        return toast.error("You must provide a note")
    }
    const body = {timestamp: timestamp.value, note: note.value}
    client(`/notes/${roastData.id}`, {body})
    toast.success('Note recorded')
    note.setValue('')
    timestamp.setValue('')
}
  return (
    <NotesWrapper>
      <label htmlFor="milestone-note">Notes</label>
      <textarea
        id="milestone-note"
        value={note.value}
        onChange={note.onChange}
      />

      <label htmlFor="note-input">Timestamp</label>
      <Input id="note-input" placeholder="ex. 7:30"
      value={timestamp.value}
      onChange={timestamp.onChange}
      />

      <AddNoteButton onClick={addNote} >Add Note</AddNoteButton>
    </NotesWrapper>
  );
};

export default NotesWidget;
