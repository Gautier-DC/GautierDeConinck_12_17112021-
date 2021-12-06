import React from "react";
import styled from 'styled-components';
import DailyActivity from '../DailyActivity';
import AverageSessions from '../AverageSessions';
import RadarStats from '../RadarStats';
import ScoreChart from "../ScoreChart";

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    max-width: 835px;
    height: 70vh;
    @media (min-width: 1200px) {
        flex-basis: 65%;
    }
`

const UnderDshbrd = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
`

function LeftDashboard(){
    return(
        <LeftContainer>
            <DailyActivity />
            <UnderDshbrd>
                <AverageSessions />
                <RadarStats />
                <ScoreChart />
            </UnderDshbrd>
        </LeftContainer>
    )
}

export default LeftDashboard