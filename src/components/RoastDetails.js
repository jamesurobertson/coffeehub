import React from 'react'
import styled from 'styled-components'
import { FiCoffee } from "react-icons/fi";
import originColors from '../styles/OriginColors'

const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;

    .roast-data {
        display: flex;
        color: ${(props) => props.theme.secondaryColor};
        margin-right: 10px;
        font-size: 12px;

        .coffee-icon {
            margin-right: 6px;
            size: 1rem;
        }
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
                <div className='roast-data'><FiCoffee className='coffee-icon' />{' '}{numCups}</div>
        </DetailsWrapper>
    )
}

export default RoastDetails
