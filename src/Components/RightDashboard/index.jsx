import React from "react";
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import NutritionComponent from "../NutritionComponent";
import energy from '../../assets/icons/energy.svg'
import chicken from '../../assets/icons/chicken.svg'
import apple from '../../assets/icons/apple.svg'
import cheeseburger from '../../assets/icons/cheeseburger.svg'

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 25%;
    max-width: 258px;
    height: 70vh;
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