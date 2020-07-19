import React, {useEffect, useContext} from 'react'
import styled from 'styled-components'
import RoastSetUp from '../components/Roast/RoastSetUp'
import GraphSetUp from '../components/Roast/GraphSetUp'
import RoastHeader from '../components/Roast/RoastHeader'
import RoastMain from '../components/Roast/RoastMain'
import {client} from '../utils/index'
import {RoastContext} from '../context/RoastContext'


const RoastWrapper = styled.div`
    display: flex;
    flex-flow: column;
`

const Roast = (props) => {

    const {setRoastData, roastData} = useContext(RoastContext)
    useEffect(() => {
        (async () => {
            const {2: username, 3: roastName} = props.location.pathname.split('/')

            const roast = await client(`/roasts/${username}/${roastName}`)
            setRoastData(roast)

        })()
    }, [props.location, setRoastData])

    if (!roastData) return null
    return (
        <RoastWrapper>
            <RoastHeader/>
            {roastData.totalTime ? <RoastMain/> :
            roastData.load ? <GraphSetUp/> :
            <RoastSetUp/> }

        </RoastWrapper>
    )
}

export default Roast
