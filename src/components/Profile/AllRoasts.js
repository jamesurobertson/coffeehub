import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "../../styles/Button";
import Input from "../../styles/Input";
import useInput from "../../hooks/useInput";
import { UserContext } from "../../context/UserContext";
import RoastCard from "./RoastCard";

const RoastsWrapper = styled.div`
  display: flex;
  flex-flow: column;

  .allroasts-header {
    border-bottom: 1px solid ${(props) => props.theme.border};
    padding: 20px 0;
    width: 100%;
  }

`;


const NoRoasts = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
padding: 98px 0;

`

const NewRoast = styled(Button)`
  background-color: ${(props) => props.theme.green};
  margin-left: 10px;
`;

const AllRoasts = ({ profileData }) => {
  const { user } = useContext(UserContext);
  const [roastsArray, setRoastsArray] = useState(profileData.roasts);
  const searchInput = useInput("");

  const searchChange = (e) => {
    searchInput.setValue(e.target.value);
    const searchArray = profileData.roasts.filter((roast) => {
      return roast.name.includes(e.target.value);
    });

    setRoastsArray(searchArray);
  };

  if (roastsArray.length === 0)
    return (

      <NoRoasts>
        {`${profileData.username} doesnt' have any roasts yet :(`}
      </NoRoasts>
    );

  return (
    <RoastsWrapper>
      <div className="allroasts-header">
        <Input
          style={{ width: "50%" }}
          placeholder="Find a Roast..."
          value={searchInput.value}
          onChange={searchChange}
        />
        {user.id === profileData.id ? <NewRoast>New</NewRoast> : ""}
      </div>
      {roastsArray.map((roast) => {
        return <RoastCard roast={roast} />;
      })}
    </RoastsWrapper>
  );
};

export default AllRoasts;
