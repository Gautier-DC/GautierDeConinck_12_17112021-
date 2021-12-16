import React from "react";
//import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Aside from '../Components/Aside';
import colors from '../utils/style/colors';
import LeftDashboard from '../Components/LeftDashboard';
import RightDashboard from '../Components/RightDashboard';

const MainContent = styled.section`
    background-color: rgb(255, 255, 255);
    box-shadow: inset 0px 11px 8px -10px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    padding: 4.5em 2em;
    @media (min-width: 1200px) {
        padding: 4.5em 6.5em;
    }
`

const HelloUser = styled.h1`
    font-size: 3em;
    margin: 0;

    span{
        color: ${colors.primary};
    }
`
const Baseline = styled.p`
    font-size: 1.15em;
`

const DashboardCtnr = styled.div`
    padding: 3em 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1200px) {
        flex-direction: row;
    }
`

function Home({user}){
    if(!user){
        return null
    }
    
    return(
        <main>
            <Aside />
            <MainContent>
                <HelloUser>Bonjour <span>{user.userInfos.firstName}</span></HelloUser>
                <Baseline>Félicitation ! Vous avez explosé vos objectifs hier 👏</Baseline>
                <DashboardCtnr>
                    <LeftDashboard Id={user.id} userScore={user.score}/>
                    <RightDashboard keyData={user.keyData}/>
                </DashboardCtnr>
            </MainContent>
        </main>
    )
}
export default Home