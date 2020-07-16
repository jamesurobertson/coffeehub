import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {RoastContext} from '../../context/RoastContext'
import Graph from './Graph'
import TimeStampTracker from './TimeStampTracker'


const GraphSetUpWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: space-around;
    margin: 20px;
    padding: 20px;

    .comp {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 40%;
    }
`


const GraphSetUp = () => {

    return (
        <GraphSetUpWrapper>
            <TimeStampTracker/>
            <Graph/>
        </GraphSetUpWrapper>
    )
}

export default GraphSetUp
