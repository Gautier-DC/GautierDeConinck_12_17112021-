import React, { useState } from "react";
import { LineChart, Line, XAxis, ReferenceArea, Tooltip, Legend, ResponsiveContainer, YAxis } from "recharts";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const RespCtr = styled(ResponsiveContainer)`
  background-color: ${colors.primary};
  border-radius: 5px;
`;

const data = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "9",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export default function AverageSessions() {
  const [activeLabel, setActiveLabel] = useState("10");

  return (
    <RespCtr width="33%" height={263}>
      <LineChart onMouseMove={(e) => setActiveLabel(e.activeLabel)} data={data} margin={{ top: 50 }}>
        <text x={34} y={29} fill="#fff" fontSize={15} opacity={0.5} dominantBaseline="middle">
          Durée moyenne des
        </text>
        <text x={34} y={50} fill="#fff" fontSize={15} opacity={0.5} dominantBaseline="middle">
          sessions
        </text>
        <Line type="monotone" dot={false} dataKey="pv" stroke="#fff" strokeWidth={2} />
        <XAxis stroke="#bdc3c7" opacity={0.6} axisLine={false} tickLine={false} tickCount={10} dataKey="name" />
        <YAxis hide={true} />
        <Tooltip />
        <ReferenceArea  x1={activeLabel} x2="10" y1={0} y2={10000} strokeOpacity={0.5} />
      </LineChart>
    </RespCtr>
  );
}
