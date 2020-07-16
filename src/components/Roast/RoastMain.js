import React, {useContext} from 'react'
import styled from 'styled-components'
import {RoastContext} from '../../context/RoastContext'

const RoastMainWrapper = styled.div`
display: flex;
flex-direction: column;
width: 80%;
border: 1px solid black;
    margin: 20px auto;

`

const RoastMain = () => {
    const {roastData} = useContext(RoastContext)

    if (!roastData) return null
    console.log(roastData.timestamps)
    return (
        <RoastMainWrapper>
            {roastData.timestamps.length > 0 ? 'hey' : '' }
        </RoastMainWrapper>
    )
}

export default RoastMain
