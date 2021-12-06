import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, tickCount } from "recharts";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const RespCtr = styled(ResponsiveContainer)`
  background-color: ${colors.tertiary};
  border-radius: 5px;
`;

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function RadarStats() {
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
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis stroke="#fff" tickLine={false} dataKey="subject" tick={{ fontSize: 10 }} />
        <Radar name="Mike" dataKey="A" fill={`${colors.primary}`} fillOpacity={0.6} />
      </RadarChart>
    </RespCtr>
  );
}
