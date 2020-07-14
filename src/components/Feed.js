import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FeedWrapper = styled.div`
    height: calc(100vh - 52px);
    width: 100%;
    background-color: 1px solid ${(props) => props.theme.bgSecondary};

`

const Feed = () => {
    return (
        <FeedWrapper></FeedWrapper>
    )
}


export default Feed
