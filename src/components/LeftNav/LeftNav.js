import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RoastsContainer from './RoastsContainer'

const LeftNavWrapper = styled.div`
    width: 33vw;
    height: calc(100vh - 52px);
    max-width: 350px;
    background-color: ${(props) => props.theme.bg};
    border: 1px solid ${(props) => props.theme.gray};

`

const LeftNav = () => {
    return (
        <LeftNavWrapper>
            <RoastsContainer/>
        </LeftNavWrapper>
    )
}


export default LeftNav
