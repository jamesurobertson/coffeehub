import React from "react";
import styled from "styled-components";
import { TiCoffee } from "react-icons/ti";
import { Link } from "react-router-dom";
import Search from './Search'

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  z-index: 100;

  .header__search {
      margin-left: 10px;
    padding: 5px 10px;
    width: 325px;
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
`;

const Header = () => {
  return (
      <>
      <div style={{height: '52px'}}/>
    <HeaderWrapper>
      <div style={{ display: "flex", alignItems: 'center' }}>
        <Link to="/">
          <TiCoffee color="white" size="3em" />
        </Link>
        <form>
          <Search/>
        </form>
      </div>
    </HeaderWrapper>
    </>
  );
};

export default Header;
