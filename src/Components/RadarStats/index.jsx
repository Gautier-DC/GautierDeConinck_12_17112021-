import React from "react";
import propTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from "recharts";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const RespCtr = styled(ResponsiveContainer)`
  background-color: ${colors.tertiary};
  border-radius: 5px;
`;

/**
 * Transform numbers into labels for Xaxis
 * @param {number} value 
 * @returns string
 */
function formatPolarAxis(value) {
  if(value === 1) return "Intensité"
  if(value === 2) return "Vitesse"
  if(value === 3) return "Force"
  if(value === 4) return "Endurance"
  if(value === 5) return "Energie"
  if(value === 6) return "Cardio"
  return value
}


export default function RadarStats({perf}) {

  if(!perf){
    return null
  }
  console.log('sessions', perf)
  return (
    <RespCtr width="33%" height={263}>
      <RadarChart
        margin={{
          top: 10,
          right: 20,
          left: 20,
          bottom: 10,
        }}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={perf.data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis stroke="#fff" tickLine={false} tick={{ fontSize: 10 }} dataKey="kind" tickFormatter={formatPolarAxis} />
        <Radar dataKey="value" fill={`${colors.primary}`} fillOpacity={0.6} />
      </RadarChart>
    </RespCtr>
  );
}

RadarStats.propTypes = {
  perf: propTypes.shape({
    userId: propTypes.number,
    kind: propTypes.shape({
      '1': propTypes.string,
      '2': propTypes.string,
      '3': propTypes.string,
      '4': propTypes.string,
      '5': propTypes.string,
      '6': propTypes.string,
    }),
    data: propTypes.arrayOf(propTypes.shape({
      value: propTypes.number,
      kind: propTypes.number,
    }))
  })
}