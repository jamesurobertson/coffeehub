import React, {useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineCoffee } from "react-icons/ai";
import Button from "../../styles/Button";
import {UserContext} from '../../context/UserContext'
import {client} from '../../utils/index'
import {toast} from 'react-toastify'
import RoastDetails from '../RoastDetails'

const RoastCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  padding: 20px;
  margin-right: 20px;

  .roastCard-details {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    height: 100%;
  }

  a {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 20px;
  }

  .roast-data {
    color: ${(props) => props.theme.secondaryColor};
    margin-right: 10px;
    font-size: 12px;
  }

`;

const RoastCard = ({ roast }) => {
    const {user, setUser} = useContext(UserContext)

    const cupRoast = async () => {
        const res = await client(`/roasts/cup/${roast.id}`, {method:'POST'})
        const updatedCups = [...user.cups, res]
        toast.success(`Cupped ${roast.roastUser.username}/${roast.name}`)
        setUser({...user, cups: updatedCups})
}

    const uncupRoast = () => {
        client(`/roasts/cup/${roast.id}`, {method:'DELETE'})
        toast.success(`Uncupped ${roast.roastUser.username}/${roast.name}`)
        const updatedCups = user.cups.filter(cup => cup.roastId !== roast.id)
        setUser({...user, cups: updatedCups})

    }
  return (
    <RoastCardWrapper>
      <div className="roastCard-details">
        <Link to={`/r/${roast.roastUser.username}/${roast.name}`}>
          {roast.name}
        </Link>
       <RoastDetails origin={roast.origin.name} numCups={roast.cups.length}/>
       </div>
      <div>
      {user.cups.some(cup => cup.roastId === roast.id) ?
      <Button onClick={uncupRoast}><AiOutlineCoffee /> Uncup</Button> :
      <Button onClick={cupRoast}><AiOutlineCoffee /> Cup</Button> }
      </div>
    </RoastCardWrapper>
  );
};

export default RoastCard;
