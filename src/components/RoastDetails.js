import React from 'react'
import styled from 'styled-components'
import { AiOutlineCoffee } from "react-icons/ai";
import originColors from '../styles/OriginColors'

const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;

    .roast-data {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.secondaryColor};
        margin-right: 10px;
        font-size: 12px;
    }

    .originColor {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 6px;
    }

`

const RoastDetails = ({origin, numCups}) => {

    return (
        <DetailsWrapper>
                <div className='roast-data'>
                    <div style={{backgroundColor: `${originColors[`${origin}`]}`}} className='originColor'/>
                    {origin}
                    </div>
                <div className='roast-data'><AiOutlineCoffee/>{' '}{numCups}</div>
        </DetailsWrapper>
    )
}

export default RoastDetails
