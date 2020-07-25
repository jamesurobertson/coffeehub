import React from 'react'
import styled from 'styled-components'
import Button from '../../styles/Button'

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 100%;
    background-color: ${(props) => props.theme.black};
    border-bottom: 1px solid black;
    padding: 8px 0;
`

const HeaderInner = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
    max-width: 1280px;
    height: 55px;

    .signin-button {
        background-color: transparent;
    }

    .signup-button {
        margin: 0 5px;
        background-color: transparent;
        border: 1px solid white;
    }
`

const LandingHeader = ({login, signup}) => {

    return (
        <HeaderWrapper>
            <HeaderInner>
                <div>

                </div>
                <div>
                <Button className='signin-button' onClick={login}>Sign in</Button>
                <Button className='signup-button' onClick={signup}>Sign up</Button>

                </div>
            </HeaderInner>
        </HeaderWrapper>
    )
}

export default LandingHeader
