import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../styles/Button";
import Input from "../../styles/Input";
import useInput from "../../hooks/useInput";
import { UserContext } from "../../context/UserContext";
import RoastCard from './RoastCard'

const RoastsWrapper = styled.div`
  display: flex;
  flex-flow: column;

  .allroasts-header {
    border-bottom: 1px solid ${(props) => props.theme.border};
    padding: 20px 0;
    width: 100%;
  }
`;

const NewRoast = styled(Button)`
  background-color: ${(props) => props.theme.green};
  margin-left: 10px;
`;

const AllRoasts = ({ profileData }) => {
  const { user } = useContext(UserContext);
  const searchInput = useInput("");
  console.log(profileData);
  return (
    <RoastsWrapper>
      <div className="allroasts-header">
        <Input
          style={{ width: "50%" }}
          placeholder="Find a Roast..."
          value={searchInput.value}
          onChange={searchInput.onChange}
        />
        {user.id === profileData.id ? <NewRoast>New</NewRoast> : ""}
      </div>
      {profileData.roasts.map(roast => {
          return (
              <RoastCard roast={roast}/>
          )
      })}
    </RoastsWrapper>
  );
};

export default AllRoasts;
