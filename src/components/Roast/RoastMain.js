import React, {useContext} from 'react'
import styled from 'styled-components'
import {RoastContext} from '../../context/RoastContext'
import Graph from './widgets/Graph'
import Chart from './widgets/Chart'

const RoastMainWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 20px auto;

`

const RoastMain = () => {
    const {roastData} = useContext(RoastContext)

    if (!roastData) return null
    return (
        <RoastMainWrapper>
            <h1>{roastData.bean}</h1>
            <p>{roastData.description}</p>
            <Graph/>
            <Chart/>
        </RoastMainWrapper>
    )
}

export default RoastMain
