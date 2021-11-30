import styled from 'styled-components';
import Aside from '../Components/Aside';
import colors from '../utils/style/colors';
import LeftDashboard from '../Components/LeftDashboard';
//import RightDashboard from '../Components/RightDashboard';

const MainContent = styled.section`
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    height: 100vh;
    z-index: -1;
    padding: 4.5em 6.5em;

    p {
        font-size: 1.15em;
    }
`

const HelloUser = styled.h1`
    font-size: 3em;
    margin: 0;

    span{
        color: ${colors.primary};
    }
`

const DashboardCtnr = styled.div`
    padding: 3em 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

function Home(){
    return(
        <main>
            <Aside />
            <MainContent>
                <HelloUser>Bonjour <span>Thomas</span></HelloUser>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <DashboardCtnr>
                    <LeftDashboard></LeftDashboard>
                    
                </DashboardCtnr>
            </MainContent>
        </main>
    )
}
export default Home