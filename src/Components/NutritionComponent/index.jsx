import React from "react";
import propTypes from "prop-types";
import styled from 'styled-components';
import colors from '../../utils/style/colors';


const NutritionCtr = styled.article`
    background-color: ${colors.bglight};
    padding: 1.5em;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 24%;
    max-height: 124px;
    @media (min-width: 1200px) {
        width: 100%;
    }
`

const Icon = styled.img`
    padding: 1.35em;
    border-radius: 5px;
    margin-right: 1em;
`

const InfoCtr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 90%;
`

const NutritionData = styled.h2`
    font-size: 1.3em;
    font-weight: 700;
    color: ${colors.tertiary};
    margin: 0;
`

const NutritionLabel = styled.p`
    font-size: 0.85em;
    color: ${colors.lighttxt};
    margin: 0;
`

export default function NutritionComponent({icon, bgColor, data, label}){
    return(
        <NutritionCtr>
            <Icon src={icon} style={{backgroundColor: bgColor}}/>
            <InfoCtr>
                <NutritionData>{data}</NutritionData>
                <NutritionLabel>{label}</NutritionLabel>
            </InfoCtr>
        </NutritionCtr>
    )
}

NutritionComponent.propTypes = {
    icon: propTypes.string,
    bgColor: propTypes.string,
    data: propTypes.string,
    label: propTypes.string,
}