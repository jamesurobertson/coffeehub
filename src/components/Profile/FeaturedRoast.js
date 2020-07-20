import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { AiOutlineCoffee } from "react-icons/ai";


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
        color: ${(props) => props.theme.secondaryColor};
        margin-right: 10px;
        font-size: 12px;
    }
`

const FeaturedRoast = () => {
    return (
        <FeaturedWrapper>
            <Link to={`/u/jamesurobertson/first-roast`}>
                first-roast
            </Link>
            <p className='featured-bio'>The first roast on the site!</p>
            <div style={{display: 'flex'}}>
                <div className='roast-data'>Ethiopia</div>
                <div className='roast-data'><AiOutlineCoffee/>{' '}12</div>
            </div>
        </FeaturedWrapper>
    )
}

export default FeaturedRoast
