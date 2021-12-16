import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import colors from '../../utils/style/colors';

const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const UserContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 400px;
    border-radius: 10px;
`

function Connection(userId, firstName){
    
    return(
        <main>
            <h1>Quel utilisateur êtes-vous ?</h1>
            <SelectContainer>
                <UserContainer style={{backgroundColor: colors.primary, color: colors.secondary}}>
                    <p>{firstName}</p>
                </UserContainer>
                <UserContainer style={{backgroundColor: colors.primary, color: colors.secondary}}>
                    <p>{firstName}</p>
                </UserContainer>

            </SelectContainer>
        </main>
    )
}
export default Connection