import React from 'react'
import styled from 'styled-components'
import { AiOutlineCoffee } from "react-icons/ai";

const ActionButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.borderDarker};
    border-radius: 5px;
    width: 100px;

    div {
        padding: 8px;
        display: flex;
        flex-direction: center;
    }

    button {
        background-color: transparent;
        border: none;
        padding: 4px 0;
    }

    .actionAmount {
        background-color: ${(props) => props.theme.bg};
        flex: 1;
        border-left: 1px solid ${(props) => props.theme.borderDarker};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-weight: bold;
        outline: 0;
        cursor: pointer;
    }

    .actionType {
        display: flex;
        justify-content: space-between;
        padding: 0 12px;
        flex: 1.5;
        outline: 0;
        cursor: pointer;
    }

`

const ActionButton = ({action}) => {

    return (
        <ActionButtonWrapper>
            <button className='actionType'>
                <AiOutlineCoffee/>
                {action}
            </button>
            <button className='actionAmount'>
                0
            </button>
        </ActionButtonWrapper>
    )
}

export default ActionButton
