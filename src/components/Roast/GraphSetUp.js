import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {RoastContext} from '../../context/RoastContext'
import Graph from './Graph'
import TimeStampTracker from './TimeStampTracker'


const GraphSetUpWrapper = styled.div`
    display: flex;

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
