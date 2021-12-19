import React from 'react';
import propTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import colors from "../../utils/style/colors";
import styled from "styled-components";


const RpCtr = styled(ResponsiveContainer)`
  background-color: ${colors.bglight};
  border-radius: 5px;
  height: 50%;
  margin-bottom: 1em;
  `;

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

const GreyLegend = styled.span`
  color: ${colors.lighttxt};
  font-size: 0.9em;
  margin-left: 0.6em;
  margin-right: 1em;
`;

export default function DailyActivity({activity}) {

  if(!activity){
    return null
  }
  return (
    <RpCtr width="100%" height={320}>
      <BarChart
        data={activity.sessions}
        margin={{
          top: 90,
          right: 30,
          left: 20,
          bottom: 15,
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
          dy={10}
          padding={{
            right: -35,
            left: -35,
          }}
          opacity={0.5}
          tickLine={false}
          dataKey={activity.sessions.index}
          stroke="#95a5a6"
          width={400}
          tickFormatter={formatXAxis}
        />
        <YAxis yAxisId="left-axis" orientation="left" hide={true} tickCount={3} domain={[0, 'dataMax']}/>
        <YAxis yAxisId="right-axis" dx={10} axisLine={false} tickLine={false} tickCount={3} dataKey="kilogram" orientation="right" stroke="#95a5a6" domain={[68, 'dataMax']} />
        <Tooltip
          content={<CustomTooltip /> }
        />
        <Legend wrapperStyle={{ right: 30, top: 15 }} align="right" verticalAlign='middle' iconType="circle" iconSize="8" formatter={CustomLegend} />'
        <Bar dataKey="kilogram" yAxisId="right-axis"fill={`${colors.tertiary}`} radius={[6, 6, 0, 0]} />
        <Bar dataKey="calories" yAxisId="left-axis" fill={`${colors.primary}`} radius={[6, 6, 0, 0]} />
      </BarChart>
    </RpCtr>
  );
}

DailyActivity.propTypes = {
  activity: propTypes.shape({
    userId: propTypes.number,
    sessions: propTypes.arrayOf(propTypes.shape({
      day: propTypes.string,
      kilogram: propTypes.number,
      calories: propTypes.number,
    }))
  })
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

//Format text of the legend
function CustomLegend(value) {
  if(value === 'kilogram'){
  return <GreyLegend>Poids (kg)</GreyLegend>
  } return <GreyLegend >Calories brûlées (kCal)</GreyLegend>
}

/**
 * Change labels of the Xaxis
 * @param {number} value 
 * @returns string
 */
 function formatXAxis(value) {
  return value + 1
}