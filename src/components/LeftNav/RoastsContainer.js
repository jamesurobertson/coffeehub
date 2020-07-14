import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiCoffee } from "react-icons/ti";
import { FiCoffee } from "react-icons/fi";

const RoastsContainerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 10px 24px;

  .roastContainer__search {
    margin-top: 10px;
    border: 1px solid ${(props) => props.theme.gray};
    border-radius: 5px;
    padding: 8px 12px;
    outline: 0;
  }
`;

const RoastContainer = styled.div`
  padding: 20px 0;
  .individualRoast {
    padding: 6px 0;
    display: flex;
  }

  a {
    padding-left: 10px;
    font-weight: bold;
    font-size: 14px;
    color: ${(props) => props.theme.blue};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .Roasts__show-more {
    cursor: pointer;
    padding: 12px 0;
    border-bottom: 1px solid ${(props) => props.theme.gray};
    font-size: 12px;
    color: ${(props) => props.theme.bgDark};
  }
`;

const RoastContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  width: 100%;

  .roastContainer__newroast {
    font-size: 14px;
    padding: 4px 12px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.green};
    border-radius: 5px;
  }
`;
const RoastsContainer = () => {
  return (
    <RoastsContainerWrapper>
      <RoastContainerHeader>
        <h2>Roasts</h2>
        <Link className="roastContainer__newroast" to="/new">
          <TiCoffee size="1.5em" />
          New
        </Link>
      </RoastContainerHeader>
      <input className="roastContainer__search" placeholder="Find a Roast..." />
      <RoastContainer>
        <div className="individualRoast">
          <FiCoffee />
          <Link to="/jamesurobertson/roast">jamesurobertson/roastexample</Link>
        </div>
        <div className="individualRoast">
          <FiCoffee />
          <Link to="/jamesurobertson/roast">jamesurobertson/roastexample</Link>
        </div>
        <div className="individualRoast">
          <FiCoffee />
          <Link to="/jamesurobertson/roast">jamesurobertson/roastexample</Link>
        </div>
        <div className="individualRoast">
          <FiCoffee />
          <Link to="/jamesurobertson/roast">jamesurobertson/roastexample</Link>
        </div>
        <div className="individualRoast">
          <FiCoffee />
          <Link to="/jamesurobertson/roast">jamesurobertson/roastexample</Link>
        </div>
        <div className="individualRoast">
          <FiCoffee />
          <Link to="/jamesurobertson/roast">jamesurobertson/roastexample</Link>
        </div>
        <div className="Roasts__show-more">Show more</div>
      </RoastContainer>
    </RoastsContainerWrapper>
  );
};

export default RoastsContainer;
