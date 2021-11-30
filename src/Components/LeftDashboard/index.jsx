import styled from 'styled-components';
import DailyActivity from '../DailyActivity';
import AverageSessions from '../AverageSessions';

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 65%;
    height: 100%;
`

const UnderDshbrd = styled.div`
    z-index: -2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

function LeftDashboard(){
    return(
        <LeftContainer>
            <DailyActivity />
                <AverageSessions />
        </LeftContainer>
    )
}

export default LeftDashboard