import React from "react";
import propTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import styled from 'styled-components';
import colors from "../../utils/style/colors";


const RespCtr = styled(ResponsiveContainer)`
    background-color: ${colors.bglight};
    border-radius: 5px;
    `

const ScoreTitle = styled.tspan`
  font-weight: 700;
  font-size: 2.5em;
  text-align: center;
  fill: ${colors.tertiary};
 ;
`

const ScoreTxt = styled.tspan`
  font-weight: 500;
  font-size: 1em;
  text-align: center;
  fill: ${colors.lighttxt};
 ;
`

export default function ScoreChart({score}) {

  //Array that will be used for the chart.
  //First value "Score" is the the current score of the user 
  //Second value "Fill" is the shadow that will fill the rest of the charts
  const data = [
    { name: "Score", value: score },
    { name: "Fill", value: 1 - score},
  ];

    return (
        <RespCtr width="30%" height={263}>
            <PieChart>
                <defs>
                    <filter id="shadow" height="200%">
                        <feDropShadow dx="0" dy="10" stdDeviation="10"/>
                    </filter>
                </defs>
                <Pie
                data={data}
                innerRadius={70}
                outerRadius={80}
                cornerRadius={20}
                startAngle={90}
                endAngle={450}
                dataKey="value"
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 10,
                }}
                >
                  {data.map((entry, index) => {
                    if (index === 1) {
                      return <Cell key={`cell-${index}`} stroke="none" filter="url(#shadow)" fill="#777777" opacity={0.1}/>; // make sure to map the index to the colour you want
                    }
                    return <Cell key={`cell-${index}`} fill={`${colors.primary}`} forceCornerRadius={true} radius={[6, 6, 6, 6]} />;
                  })}                    
                  <Label
                  content={<CenterLabel displayedScore={data[0].value} />}
                  position="center"
                  />
                  <Label position="center" dx={-60} dy={-100} value="Score" fill={`${colors.tertiary}`} fontWeight={700}/>
                </Pie>
            </PieChart>
        </RespCtr>
    );
}

ScoreChart.propTypes = {
  score: propTypes.number,
}


/**
 * Display message at the center of the chart
 * @param {*} param0 
 * @returns HTML element
 */
function CenterLabel({viewBox, displayedScore = 0}) {
const { cx, cy } = viewBox;
    return(
    <>
      <text x={cx - 38} y={cy - 5}>
        <ScoreTitle>
          {displayedScore * 100}%
        </ScoreTitle>
      </text>
      <text x={cx - 27} y={cy + 15}>
        <ScoreTxt>
          de votre
        </ScoreTxt>        
      </text>
      <text x={cx - 24} y={cy + 35}>
        <ScoreTxt>
          objectif
        </ScoreTxt>       
      </text>
    </>
    )
}