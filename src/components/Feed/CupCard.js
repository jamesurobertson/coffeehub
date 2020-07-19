import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";
import { AiOutlineCoffee } from "react-icons/ai";

const CupCardWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgSecondary};

  .feed-card-1 {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex: 0;
  }

  .feed-card-2 {
    width: 100%;
    max-width: 950px;
    padding-left: 15px;
    display: flex;
    flex-flow: column;

    a {
      font-weight: bold;
    }
  }

  .feed-card-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    background-color: white;

    p {
      font-size: 14px;
      color: ${(props) => props.theme.secondaryColor};
    }

    .feed-card__roast-details {
      display: flex;
      align-items: center;
      margin-top: 20px;

      div {
        font-size: 12px;
        text-align: center;
        color: ${(props) => props.theme.secondaryColor};
        padding-right: 20px;
      }
    }
  }
`;

const CupCard = ({ details }) => {
  if (!details) return null;
  return (
    <CupCardWrapper>
      <img className="feed-card-1" src={details.profileImageUrl} />
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
            <div className="feed-card__roast-details">
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
