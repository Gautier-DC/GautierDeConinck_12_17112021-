import styled from 'styled-components';
import Aside from '../Components/Aside';

const MainContent = styled.section`
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: stretch;
    flex-grow: 1;
    z-index: 99;
    flex-basis: 400px;
`

function Home(){
    return(
        <main>
            <Aside />
            <MainContent />
        </main>
    )
}
export default Home