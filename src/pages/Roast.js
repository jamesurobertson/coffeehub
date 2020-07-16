import React from 'react'
import styled from 'styled-components'
import RoastSetUp from '../components/Roast/RoastSetUp'
import RoastHeader from '../components/Roast/RoastHeader'


const RoastWrapper = styled.div`
    display: flex;
    flex-flow: column;
`

const Roast = () => {
    return (
        <RoastWrapper>
            <RoastHeader/>
            <RoastSetUp/>
        </RoastWrapper>
    )
}

export default Roast
