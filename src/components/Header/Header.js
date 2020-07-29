import React, {useContext} from "react";
import styled from "styled-components";
import { TiCoffee } from "react-icons/ti";
import { Link } from "react-router-dom";
import Search from "./Search";
import {UserContext} from '../../context/UserContext'

const HeaderWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  z-index: 100;

  @media screen and (max-width: 690px) {
      padding: 0;
      justify-content: space-around;
  }

  .header__search {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    outline: 0;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.bgDark};

  }
  .header__search::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.white};
    opacity: 0.7;
  }

  img {
      width: 30px;
      height: auto;
      border-radius: 50%;

  }
`;

const Header = () => {
    const {user} = useContext(UserContext)

  return (
    <>
      <div style={{ height: "52px" }} />
      <HeaderWrapper>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <TiCoffee color="white" size="3em" />
          </Link>
          <form>
            <Search />
          </form>
        </div>
        <Link to={`/p/${user.username}`}>
        <img src={user.profileImageUrl} alt='profile-avatar'/>
        </Link>
      </HeaderWrapper>
    </>
  );
};

export default Header;
