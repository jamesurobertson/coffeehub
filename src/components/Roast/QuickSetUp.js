import React from 'react'
import styled from 'styled-components'
import Graph from './Graph'

const QuickSetUpWrapper = styled.div`
    width: 100%;
    height: 10000px;
    background-color: ${(props) => props.theme.white};
`

const QuickSetUp = () => {

    return (
        <QuickSetUpWrapper>
            <Graph/>
        </QuickSetUpWrapper>
    )
}


export default QuickSetUp
