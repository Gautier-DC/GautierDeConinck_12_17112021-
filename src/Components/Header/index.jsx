import logo from "../../assets/sportsee_logo.svg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding: 30px;
    max-height: 91px;
    max-width: 1440px;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
`

const HeaderLogo = styled(Link)`
    max-height: 61px;
    flex-basis: 25%;
`

const StyledNav = styled.nav`
    color: #ffffff;
    font-weight: 500;
    font-size: 1.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-basis: 75%;

    a:hover{
        text-decoration: underline;
    }
`

function Header(){
    return(
        <HeaderContainer>
            <HeaderLogo to='/'>
                <img src={logo} alt="sportsee logo"/>
            </HeaderLogo>
            <StyledNav>
                <Link to='/'>Accueil</Link>
                <Link to='/profil'>Profil</Link>
                <Link to='/reglage'>Réglage</Link>
                <Link to='/community'>Communauté</Link>
            </StyledNav>

        </HeaderContainer>
    )
}

export default Header;