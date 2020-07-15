import React from 'react'
import styled from 'styled-components'
import QuickSetUp from '../components/Roast/QuickSetUp'
import RoastHeader from '../components/Roast/RoastHeader'


const RoastWrapper = styled.div`
    display: flex;
    flex-flow: column;
`

const Roast = () => {
    return (
        <RoastWrapper>
            <RoastHeader/>
            <QuickSetUp/>
        </RoastWrapper>
    )
}

export default Roast
