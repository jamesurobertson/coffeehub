import React, {useContext} from 'react'
import styled from 'styled-components'
import {RoastContext} from '../../../context/RoastContext'
import Button from '../../../styles/Button'



const SaveChangesWrapper = styled.div`
    margin-top: 10px;
`

const SaveChanges = ({tableType}) => {
    const {roastData, setRoastData} = useContext(RoastContext)

    const save = (e) => {
        console.log(e.target.parentNode.parentNode.firstChild)
        console.log(tableType)
    }

    return (
        <SaveChangesWrapper>
            <Button onClick={save}>Save Changes</Button>
        </SaveChangesWrapper>
    )
}

export default SaveChanges
