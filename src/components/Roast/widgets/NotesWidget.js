import React from "react";
import styled from "styled-components";
import useInput from "../../../hooks/useInput";
import Widget from "../../../styles/Widget";
import Button from "../../../styles/Button";
import Input from "../../../styles/Input";

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

const addNote =() => {
    console.log('add note')
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
      <Input id="note-input" placeholder="ex. 7:30" />

      <AddNoteButton onClick={addNote} >Add Note</AddNoteButton>
    </NotesWrapper>
  );
};

export default NotesWidget;
