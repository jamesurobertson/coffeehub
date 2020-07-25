import React from "react";
import styled from "styled-components";
import RoastsContainer from './RoastsContainer'

const LeftNavWrapper = styled.div`
    width: 33vw;
    max-width: 350px;
    position: fixed;
    top: 52px;
    left: 0;
    bottom: 0;
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
