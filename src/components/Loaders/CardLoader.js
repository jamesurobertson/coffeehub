import React from 'react'
import styled, {keyframes} from 'styled-components'
import { TiCoffee } from "react-icons/ti";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    width: 100%;
    height: 100px;
    max-width: 950px;
    margin-top: 20px;

    .coffeespinning {
        animation: ${rotate} 2.5s linear infinite;
    }

    @media screen and (min-width: 830px) {
    margin-left: calc(33vw + 20px);

    }

    @media screen and (min-width: 1060px) {
        margin-left: 370px;
    }

`


const CardLoader = () => {

    return (
        <LoaderWrapper>
            <div className='coffeespinning'>
                <TiCoffee size='3rem' />
            </div>
            Loading Activity...
        </LoaderWrapper>
    )
}

export default CardLoader
