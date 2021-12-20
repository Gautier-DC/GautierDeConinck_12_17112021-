import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Aside from '../Components/Aside';
import colors from '../utils/style/colors';
import LeftDashboard from '../Components/LeftDashboard';
import RightDashboard from '../Components/RightDashboard';
import { getUser } from "../callAPI";

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

function Home(){

    const {id} = useParams()
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        if(id) {
            getUser(id)
            .then((response) =>{
            console.log('*****', response);
            setCurrentUser(response.data.data)
            })
            .catch(error => {
            console.log(error);
        });
    }
    }, [id]);

    useEffect(() => {
        console.log('userInfo', currentUser)
    }, [currentUser]);


    if(!currentUser){
        return null
    }
    
    return(
        <main>
            <Aside />
            <MainContent>
                <HelloUser>Bonjour <span>{currentUser.userInfos.firstName}</span></HelloUser>
                <Baseline>Félicitation ! Vous avez explosé vos objectifs hier 👏</Baseline>
                <DashboardCtnr>
                    <LeftDashboard Id={currentUser.id} userScore={currentUser.score}/>
                    <RightDashboard keyData={currentUser.keyData}/>
                </DashboardCtnr>
            </MainContent>
        </main>
    )
}
export default Home

// Home.propTypes = {
//     user: propTypes.arrayOf(propTypes.shape({
//         id: propTypes.number,
//         userInfos: propTypes.shape({
//             firstName: propTypes.string,
//             lastName: propTypes.string,
//             age: propTypes.number,
//         }),
//         todayScore: propTypes.number,
//         keyData: propTypes.shape({
//             calorieCount: propTypes.number,
//             proteinCount: propTypes.number,
//             carbohydrateCount: propTypes.number,
//             lipidCount: propTypes.number
//         })
//     }))
// }