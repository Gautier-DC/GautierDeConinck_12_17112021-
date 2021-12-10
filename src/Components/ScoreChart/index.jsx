import React from "react";
import { PieChart, Pie, YAxis,Sector, Cell, ResponsiveContainer, Label } from 'recharts';
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

const data = [
    { name: "Bubble Tea Sold", value: 10 },
    { name: "Bubble Tea Left", value: 5},
 ];

export default function ScoreChart() {

  
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
                dataKey="value"
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 10,
                }}
                >
                  <Label position="insideTopLeft" value="Score" dx={20} dy={-100} fill={`${colors.tertiary}`} fontWeight={700}/>
                    {data.map((entry, index) => {
                      if (index === 1) {
                        return <Cell key={`cell-${index}`} stroke="none" filter="url(#shadow)" fill="#777777" opacity={0.1}/>; // make sure to map the index to the colour you want
                      }
                      return <Cell key={`cell-${index}`} fill={`${colors.primary}`} forceCornerRadius={true} radius={[6, 6, 6, 6]} />;
                    })}                    
                    <Label
                    content={<CenterLabel noOfBubbleTeaSold={data[0].value} />}
                    position="center"
                    />
                </Pie>
            </PieChart>
        </RespCtr>
    );
}

function CenterLabel({viewBox, noOfBubbleTeaSold = 0}) {
const { cx, cy } = viewBox;
    return(
    <>
      <text x={cx - 22} y={cy - 5}>
        <ScoreTitle>
          {noOfBubbleTeaSold}
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