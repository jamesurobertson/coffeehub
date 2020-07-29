import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import RoastDetails from '../RoastDetails'


const FeaturedWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 47%;
    height: 110px;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    padding: 15px;
    margin-right: 20px;
    margin-bottom: 20px;

    a {
        color: ${(props) => props.theme.blue};
        font-weight: bold;
        font-size: 14px;
    }

    .featured-bio {
        color: ${(props) => props.theme.secondaryColor};
        font-size: 12px;
    }

    .roast-data {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.secondaryColor};
        margin-right: 10px;
        font-size: 12px;
    }

    @media screen and (max-width: 830px) {
        width: 100%;
        margin: 10px 10px;
    }
`

const FeaturedRoast = ({roast}) => {

    return (
        <FeaturedWrapper>
            <Link to={`/r/${roast.roastUser.username}/${roast.name}`}>
                {roast.name}
            </Link>
            <p className='featured-bio'>{roast.description}</p>
            <RoastDetails origin={roast.origin.name} numCups ={roast.cups.length}/>
        </FeaturedWrapper>
    )
}

export default FeaturedRoast
