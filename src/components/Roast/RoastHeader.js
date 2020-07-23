import React, {useContext} from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Button from "../../styles/Button";
import {UserContext} from '../../context/UserContext'
import {RoastContext} from '../../context/RoastContext'
import { AiOutlineCoffee } from "react-icons/ai";
import {client} from '../../utils/index'
import {toast} from 'react-toastify'

const RoastHeaderWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 25px 25px 0 30px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgSecondary};

  .roastheader__header {
    display: flex;
    justify-content: space-between;
  }

  .roastheader__links * {
    font-size: 20px;
    margin: 0 5px;
  }

  .roastheader__link-name {
    color: ${(props) => props.theme.blue};
  }

  .roastheader__link-roast {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
  }

  .roastheader__nav {
    display: flex;
  }

  .roastheader__nav a {
    padding: 0 15px 12px;

  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.green};
  }
`;

const RoastHeader = () => {
    const {user, setUser} = useContext(UserContext)
    const {roastData} = useContext(RoastContext)

    const cupRoast = async () => {
        const res = await client(`/roasts/cup/${roastData.id}`, {method:'POST'})
        const updatedCups = [...user.cups, res]
        toast.success(`Cupped ${roastData.user.username}/${roastData.name}`)
        setUser({...user, cups: updatedCups})
}

    const uncupRoast = () => {
        client(`/roasts/cup/${roastData.id}`, {method:'DELETE'})
        toast.success(`Uncupped ${roastData.user.username}/${roastData.name}`)
        const updatedCups = user.cups.filter(cup => cup.roastId !== roastData.id)
        setUser({...user, cups: updatedCups})

    }

    if (!roastData) return null
  return (
    <RoastHeaderWrapper>
      <div className="roastheader__header">
        <div className="roastheader__links">
          <Link
            className="roastheader__link-name"
            to={`/p/${roastData.user.username}`}
          >
            {roastData.user.username}
          </Link>
          /
          <Link className="roastheader__link-roast" to={`/r/${user.username}/${roastData.name}`}>
          {roastData.name}
          </Link>
        </div>
        <div className="roastheader__actions">
        {user.cups.some(cup => cup.roastId === roastData.id) ?
      <Button onClick={uncupRoast}><AiOutlineCoffee /> Uncup</Button> :
      <Button onClick={cupRoast}><AiOutlineCoffee /> Cup</Button> }
        </div>
      </div>
      <div className="roastheader__nav">
        <NavLink exact activeclass="active" to={`/r/${roastData.user.username}/${roastData.name}`}>
          Roast
        </NavLink>
        <NavLink activeclass="active" to={`/r/${roastData.user.username}/${roastData.name}/comments`}>
          Comments
        </NavLink>
      </div>
    </RoastHeaderWrapper>
  );
};

export default RoastHeader;
