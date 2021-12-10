import React, { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, tickCount, Label } from "recharts";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { getUserPerf } from "../../callAPI";

const RespCtr = styled(ResponsiveContainer)`
  background-color: ${colors.tertiary};
  border-radius: 5px;
`;


class CustomizedLabel {
  render() {
    const { x, y, stroke, value, kindValues } = this.props;

    console.log('label custo', kindValues, value)

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {kindValues[value]}
      </text>
    );
  }
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

  useEffect(() => {
    console.log('currentPerf', currentPerf)
  }, [currentPerf]);

  
  if(!currentPerf){
    return null
  }

  return (
    <RespCtr width="33%" height={263}>
      <RadarChart
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={currentPerf.data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis stroke="#fff" tickLine={false} tick={{ fontSize: 10 }} dataKey="kind">
          <Label content={<CustomizedLabel kindValues={Object.values(currentPerf.kind)} />} />
        </PolarAngleAxis>
        <Radar dataKey="value" fill={`${colors.primary}`} fillOpacity={0.6} />
      </RadarChart>
    </RespCtr>
  );
}
