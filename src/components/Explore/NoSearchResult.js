import React from 'react'
import styled from 'styled-components'
import { GoSearch } from "react-icons/go";


const NoResultWrapper = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    align-items: center;
    padding-top: 40px;

    h1 {
        padding-top: 10px;
        font-size: 20px;
    }

`


const NoSearchResult = ({searchParam, searchType}) => {

    return (
        <NoResultWrapper>
            <GoSearch size='2rem'/>
            <h1>We couldn't find any {searchType}s matching '{searchParam}'</h1>
        </NoResultWrapper>
    )
}

export default NoSearchResult
