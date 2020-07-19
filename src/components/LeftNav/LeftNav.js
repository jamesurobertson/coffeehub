import React from "react";
import styled from "styled-components";
import RoastsContainer from './RoastsContainer'

const LeftNavWrapper = styled.div`
    width: 33vw;
    max-width: 350px;
    height: calc(100vh - 52px);
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
