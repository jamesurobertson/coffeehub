import React from 'react'
import styled from 'styled-components'
import LeftNav from '../components/LeftNav/LeftNav'
import Feed from '../components/Feed/Feed'

const HomeWrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.bgSecondary};
`

const Home = () => {

    return (
        <HomeWrapper>
            <LeftNav/>
            <Feed/>
        </HomeWrapper>
    )
}

export default Home
