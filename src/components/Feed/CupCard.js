import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";
import { AiOutlineCoffee } from "react-icons/ai";
import FeedCard from '../../styles/FeedCard'

const CupCardWrapper = styled(FeedCard)``

const CupCard = ({ details }) => {
  if (!details) return null;
  return (
    <CupCardWrapper>
      <img className="feed-card-1" src={details.profileImageUrl} alt={`${details.username}-avatar`} />
      <div className="feed-card-2">
        <div>
          <Link to={`/u/${details.username}`}>{details.username}</Link> cupped{" "}
          <Link to={`/u/${details.roastUsername}/${details.name}`}>
            {details.roastUsername}/{details.name}
          </Link>
        </div>

        <div className="feed-card-inner">
          <div styled={{ display: "flex", flexFlow: "column" }}>
            <Link to={`/u/${details.roastUsername}/${details.name}`}>
              {details.roastUsername}/{details.name}
            </Link>
            <p style={{ paddingTop: "5px" }}>{details.description}</p>
            <div className="feed-card__data-details">
              <div>{details.beanOrigin}</div>

              <div>
                <AiOutlineCoffee color="black" /> {details.numLikes}
              </div>

              <div>{new Date(details.createdAt).toDateString()}</div>
            </div>
          </div>
          <Button>
            <AiOutlineCoffee /> Cup
          </Button>
        </div>
      </div>
    </CupCardWrapper>
  );
};

export default CupCard;
