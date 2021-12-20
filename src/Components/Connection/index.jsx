import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import colors from '../../utils/style/colors';

const ConnectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    height: 90vh;
`

const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding: 1em;
    a {
        width: 45%;
        min-width: 250px;
    }
`

const UserContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    border-radius: 10px;
`

const Firstname = styled.p`
    font-weight: 700;
    font-size: 3em;
`

function Connection(){
    
    return(
        <main style={{backgroundColor: "#fff" }}>
            <ConnectionContainer>
            <h1>Quel utilisateur êtes-vous ?</h1>
                <SelectContainer>
                    <Link to='/18'>
                        <UserContainer style={{backgroundColor: colors.primary, color: colors.secondary}}>
                            <Firstname>Cecilia</Firstname>
                        </UserContainer>
                    </Link>
                    <Link to='/12'>
                        <UserContainer style={{backgroundColor: colors.secondary, color: colors.primary}}>
                            <Firstname>Karl</Firstname>
                        </UserContainer>
                    </Link>
                </SelectContainer>
            </ConnectionContainer>
        </main>
    )
}
export default Connection