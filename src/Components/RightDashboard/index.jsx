import React from "react";
import styled from 'styled-components';
import NutritionComponent from "../NutritionComponent";
import energy from '../../assets/icons/energy.svg'
import chicken from '../../assets/icons/chicken.svg'
import apple from '../../assets/icons/apple.svg'
import cheeseburger from '../../assets/icons/cheeseburger.svg'

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (min-width: 1200px) {
        flex-direction: column;
        flex-basis: 25%;
        max-width: 258px;
    }
`

function RightDashboard({keyData}){
    return(
        <RightContainer>
            <NutritionComponent icon={energy} bgColor="#fbeaea" data={keyData.calorieCount + "kCal"} label="Calories"/>
            <NutritionComponent icon={chicken} bgColor="#e9f4fb" data={keyData.proteinCount + "g"} label="Protéines"/>
            <NutritionComponent icon={apple} bgColor="#faf6e5" data={keyData.carbohydrateCount + "g"} label="Glucides"/>
            <NutritionComponent icon={cheeseburger} bgColor="#fbeaef" data={keyData.lipidCount + "g"} label="Lipides"/>
        </RightContainer>
    )
}

export default RightDashboard