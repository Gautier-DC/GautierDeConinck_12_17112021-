import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text, Label } from "recharts";
import colors from "../../utils/style/colors";
import styled from "styled-components";
import { getUserActivity } from "../../callAPI";

const StyledTooltip = styled.div`
  background-color: ${colors.primary};
  color: #fff;
  font-size: 0.5em;
  text-align: center;
  height: 63px;
  min-width: 39px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RpCtr = styled(ResponsiveContainer)`
  background-color: ${colors.bglight};
  border-radius: 5px;
  max-width: 835px;
  height: 50%;
`;

const GreyLegend = styled.span`
  color: ${colors.lighttxt};
`;


export default function DailyActivity() {

  const [currentActivity, setCurrentActivity] = useState()

  useEffect(() => {
    getUserActivity(18)
    .then((response) =>{
      setCurrentActivity(response.data.data)
    })
    .catch(error => {
      console.log(error);
  });
  }, []);

  
  if(!currentActivity){
    return null
  }
  return (
    <RpCtr width="100%" height={320}>
      <BarChart
        data={currentActivity.sessions}
        margin={{
          top: 100,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={8}
        maxBarSize={500}
        barGap={10}
      >
        <text x={25} y={28} fill={`${colors.tertiary}`} fontSize={15} fontWeight={700} textAnchor="top-left" dominantBaseline="middle">
          Activité quotidienne
        </text>
        <CartesianGrid strokeDasharray="1" opacity={0.7} vertical={false} />
        <XAxis
          dy={20}
          padding={{
            right: -25,
            left: -25,
          }}
          opacity={0.5}
          tickLine={false}
          dataKey={currentActivity.sessions.index}
          stroke="#95a5a6"
          width={400}
        />
        <YAxis yAxisId="left-axis" orientation="left" hide={true} tickCount={3}/>
        <YAxis yAxisId="right-axis" dx={10} axisLine={false} tickLine={false} tickCount={3} dataKey="kilogram" orientation="right" stroke="#95a5a6" />
        <Tooltip
          content={<CustomTooltip /> }
        />
        <Legend wrapperStyle={{ right: 10, top: 15 }} align="right" iconType="circle" iconSize="8" formatter={renderGreyLegendText} />'
        <Bar dataKey="kilogram" yAxisId="right-axis"fill={`${colors.tertiary}`} radius={[6, 6, 0, 0]} />
        <Bar dataKey="calories" yAxisId="left-axis" fill={`${colors.primary}`} radius={[6, 6, 0, 0]} />
      </BarChart>
    </RpCtr>
  );
}

function CustomTooltip({ active, payload}) {
  if (active) {
    return (
      <StyledTooltip>
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} Kcal`}</p>
      </StyledTooltip>
    );
  }

  return null;
}

function renderGreyLegendText(value) {
  return <GreyLegend>{value}</GreyLegend>;
}
