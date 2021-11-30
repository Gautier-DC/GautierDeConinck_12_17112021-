import styled from 'styled-components';
import DailyActivity from '../DailyActivity';

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 65%;
    height: 100%;
`

function LeftDashboard(){
    return(
        <LeftContainer>
            <DailyActivity />
        </LeftContainer>
    )
}

export default LeftDashboard