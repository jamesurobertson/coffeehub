import React, {useContext} from 'react'
import styled from 'styled-components'
import Button from '../../styles/Button'
import {client} from '../../utils/index'
import {RoastContext} from '../../context/RoastContext'

const ConfirmEndWrapper = styled.div`
padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .confirm-buttons {
        margin-top: 20px;
        width: 70%;
        display: flex;
        justify-content: space-between;
    }



`
const ConfirmEndRoast = ({time, closeModal}) => {
    const {roastData, setRoastData} = useContext(RoastContext)

    const MMSS = (num) => {
        const minutes = Math.floor(num / 60)
        const seconds = num % 60

        return [minutes,seconds]
            .map(v => v < 10 ? "0" + v : v)
            .join(":")
    }

    const saveRoast = () => {
        const totalTime = MMSS(time)
        const body = {totalTime}
        client(`/roasts/${roastData.id}`, {body, method: 'PUT'})
        setRoastData({...roastData, totalTime})
    }


    return (
        <ConfirmEndWrapper>
        <h1> Are you sure you want to end the roast?</h1>
        <div className='confirm-buttons'>
            <Button onClick={saveRoast} color={'#2EA44F'} >Confirm</Button>
            <Button onClick={closeModal}>Cancel</Button>
        </div>

        </ConfirmEndWrapper>
    )

}

export default ConfirmEndRoast
