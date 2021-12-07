import styled from 'styled-components';
import {ReactComponent as ZenIcon} from'../../assets/icons/zen.svg'
import {ReactComponent as SwimIcon} from'../../assets/icons/swim.svg'
import {ReactComponent as BiCycleIcon} from'../../assets/icons/bicycle.svg'
import {ReactComponent as DumbbellIcon} from'../../assets/icons/dumbbell.svg'


const VerticalNav = styled.aside`
    padding: 0 27px;
    height: calc(100vh - 91px);
    max-width: 117px;
    position: relative;
`

const IconsWrapper = styled.div`
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 12rem;
`

const IconContainer = styled.div`
    background-color: #fff;
    width: 64px;
    height: 64px;
    padding: 16px;
    margin: 0;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-start;
    border: none;
`

const Copyright = styled.p`
    color: #fff;
    font-size: 0.75em;
    transform: rotate(-90deg);
    white-space: nowrap;
    position: absolute;
    bottom: 4em;
    right: 0;
    left: 0;
`

function Aside(){
    return(
        <VerticalNav>
            <IconsWrapper>
                <IconContainer>
                    <ZenIcon />
                </IconContainer>
                <IconContainer>
                    <SwimIcon />
                </IconContainer>
                <IconContainer>
                    <BiCycleIcon />
                </IconContainer>
                <IconContainer>
                    <DumbbellIcon />
                </IconContainer>
            </IconsWrapper>
            <Copyright>© Copyright, SportSee 2021</Copyright>
        </VerticalNav>
    )
}

export default Aside