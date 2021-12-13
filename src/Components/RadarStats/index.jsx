import React, { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from "recharts";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { getUserPerf } from "../../callAPI";

const RespCtr = styled(ResponsiveContainer)`
  background-color: ${colors.tertiary};
  border-radius: 5px;
`;


function formatPolarAxis(value) {
  if(value === 1) return "Intensité"
  if(value === 2) return "Vitesse"
  if(value === 3) return "Force"
  if(value === 4) return "Endurance"
  if(value === 5) return "Energie"
  if(value === 6) return "Cardio"
  return value
}


export default function RadarStats() {

  const [currentPerf, setCurrentPerf] = useState();

  useEffect(() => {
    getUserPerf(18)
    .then((response) =>{
      setCurrentPerf(response.data.data)
      console.log('currentPerf', currentPerf)
    })
    .catch(error => {
      console.log(error);
  });
  }, []);

  // useEffect(() => {
  //   console.log('currentPerf', currentPerf)
  // }, [currentPerf]);

  
  if(!currentPerf){
    return null
  }

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
        data={currentPerf.data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis stroke="#fff" tickLine={false} tick={{ fontSize: 10 }} dataKey="kind" tickFormatter={formatPolarAxis} />
        <Radar dataKey="value" fill={`${colors.primary}`} fillOpacity={0.6} />
      </RadarChart>
    </RespCtr>
  );
}
