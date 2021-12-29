import React from 'react'
import styled from "styled-components";

const ErrorContainer = styled.div`
    padding: 2em;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 2em;
    background-color: #FFF;
`

export default function Error({currentError}) {

    return (
        <ErrorContainer>
           <p> 🛑 Hum c'est embarassant... <br /> une erreur <span style={{color: 'red', fontWeight: 700}}>{currentError.status}</span> sauvage est apparue</p>
        </ErrorContainer>
    )
}
