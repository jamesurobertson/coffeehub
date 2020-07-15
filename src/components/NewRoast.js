import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput"
import {client} from "../utils/index"

const NewRoastWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 700px;
  margin: 40px auto;

  .newRoast__header {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid ${(props) => props.theme.border};

    h1 {
      font-size: 24px;
      color: ${(props) => props.theme.primaryColor};
      font-weight: normal;
    }
    p {
      color: ${(props) => props.theme.secondaryColor};
    }
  }

  .newRoastForm {
    margin-top: 40px;

    .newRoastForm__nameDetails {
      display: flex;
    }
    .newRoastForm__roastName {
        font-weight: bold;
        justify-content: space-between;
        height: 60px;
      display: flex;
      flex-flow: column;
    }

    #form-username, #form-roastname, #newRoastForm__description {
        background-color: ${(props) => props.theme.bgSecondary};
        padding: 8px 12px;
        border: 1px solid ${(props) => props.theme.border};
        border-radius: 5px;
        height: 35px;
    }

    h1 {
        font-weight: normal;
        padding-top: 24px;
        margin: 4px 8px;
        font-size: 24px;
        display: flex;
        align-items: center;
    }

    .form-asterisk {
        color: ${(props) => props.theme.red}
    }

    p {
        padding: 10px 0;
    }

    #newRoastForm__description {
        margin: 10px 0;
        width: 100%;
    }

    button {
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.green};
        padding: 8px 12px;
        border: none;
        border-radius: 3px;
    }
  }
`;

const NewRoast = () => {
    const roastName = useInput('')
    const description = useInput('')

    const createRoast = (e) => {
        e.preventDefault()
        client(`/roast/1`)
    }

  return (
    <NewRoastWrapper>
      <div className="newRoast__header">
        <h1>Create a new Roast</h1>
        <p> A roast contains all the data on a specific roast, including the ability to create a new graph.</p>
      </div>
      <form className="newRoastForm">
        <div className="newRoastForm__nameDetails">
          <div className="newRoastForm__roastName"><label htmlFor='form-username'>Owner</label><div id='form-username'>jamesurobertson</div></div>
            <h1>/</h1>
          <div className="newRoastForm__roastName">
            <label htmlFor='form-roastname'
            >Roast name
            <span className='form-asterisk'> *</span></label>
            <input
            required
            id='form-roastname'
            autoComplete='off'
            value={roastName.value}
			onChange={roastName.onChange}
            />
          </div>
        </div>
          <p> Great roast names are short and memorable.</p>
        <label htmlFor='newRoastForm__description'>Description(optional)</label>
        <input
        value={description.value}
        onChange={description.onChange}
        id='newRoastForm__description' autoComplete='off'/>
        <button onClick={createRoast} type="submit">Create Roast</button>
      </form>
    </NewRoastWrapper>
  );
};

export default NewRoast;
