import React, {useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";
import { AiOutlineCoffee } from "react-icons/ai";
import FeedCard from '../../styles/FeedCard'
import {UserContext} from '../../context/UserContext'
import {client} from '../../utils/index'
import {toast} from 'react-toastify'
import RoastDetails from '../RoastDetails'

const CupCardWrapper = styled(FeedCard)`
`

const CupCard = ({ details }) => {
    const {user, setUser} = useContext(UserContext)

    const cupRoast = async () => {
        const res = await client(`/roasts/cup/${details.roastId}`, {method:'POST'})
        const updatedCups = [...user.cups, res]
        toast.success(`Cupped ${details.roastUsername}/${details.name}`)
        setUser({...user, cups: updatedCups})
}

    const uncupRoast = () => {
        client(`/roasts/cup/${details.roastId}`, {method:'DELETE'})
        toast.success(`Uncupped ${details.roastUsername}/${details.name}`)
        const updatedCups = user.cups.filter(cup => cup.roastId !== details.roastId)
        setUser({...user, cups: updatedCups})

    }
    if (!details) return null;
  return (
    <CupCardWrapper>
      <img className="feed-card-1" src={details.profileImageUrl} alt={`${details.username}-avatar`} />
      <div className="feed-card-2">
        <div>
          <Link to={`/p/${details.username}`}>{details.username}</Link> cupped{" "}
          <Link to={`/r/${details.roastUsername}/${details.name}`}>
            {details.roastUsername}/{details.name}
          </Link>
        </div>

        <div className="feed-card-inner">
          <div style={{ display: "flex", flexFlow: "column", maxWidth: '80%'}}>
            <Link to={`/r/${details.roastUsername}/${details.name}`}>
              {details.roastUsername}/{details.name}
            </Link>
            <p style={{ paddingTop: "5px"}}>{details.description}</p>
            <div className="feed-card__data-details">
              <RoastDetails origin={details.beanOrigin} numCups={details.numLikes}/>

              <div>{new Date(details.createdAt).toDateString()}</div>
            </div>
          </div>
          {user.cups.some(cup => cup.roastId === details.roastId) ?
      <Button onClick={uncupRoast}><AiOutlineCoffee /> Uncup</Button> :
      <Button onClick={cupRoast}><AiOutlineCoffee /> Cup</Button> }
        </div>
      </div>
    </CupCardWrapper>
  );
};

export default CupCard;
