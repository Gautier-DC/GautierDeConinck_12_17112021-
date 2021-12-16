import {useEffect, useState} from "react";
import propTypes from "prop-types";
import styled from 'styled-components';
import DailyActivity from '../DailyActivity';
import AverageSessions from '../AverageSessions';
import RadarStats from '../RadarStats';
import ScoreChart from "../ScoreChart";
import { getUserSessions, getUserActivity, getUserPerf } from "../../callAPI";

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 1em;
    @media (min-width: 1200px) {
        max-width: 835px;
        width: 70%;
        margin-bottom: 0;
    }
`

const UnderDshbrd = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    height: 50%;
`

function LeftDashboard({userScore, Id}){

    const [currentSessions, setCurrentSessions] = useState();
    const [currentActivity, setCurrentActivity] = useState()
    const [currentPerf, setCurrentPerf] = useState();

    useEffect(() => {
        getUserSessions(Id)
          .then((response) => {
            setCurrentSessions(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    useEffect(() => {
        getUserActivity(Id)
        .then((response) =>{
            setCurrentActivity(response.data.data)
            })
            .catch(error => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getUserPerf(Id)
        .then((response) =>{
            setCurrentPerf(response.data.data)
            })
            .catch(error => {
            console.log(error);
        });
    }, []);

    return(
        <LeftContainer>
            <DailyActivity activity={currentActivity}/>
            <UnderDshbrd>
                <AverageSessions sessions={currentSessions} />
                <RadarStats perf={currentPerf}/>
                <ScoreChart score={userScore}/>
            </UnderDshbrd>
        </LeftContainer>
    )
}

export default LeftDashboard

LeftDashboard.propTypes = {
    score: propTypes.number,
    Id: propTypes.number,
}