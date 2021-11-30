import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text, Label } from "recharts";
import colors from "../../utils/style/colors";
import styled from "styled-components";

const StyledTooltip = styled.div`
  background-color: ${colors.primary};
  color: #fff;
  font-size: 0.5em;
  text-align: center;
  height: 63px;
`

const RpCtr = styled(ResponsiveContainer)`
    background-color: ${colors.bglight};
    border-radius: 5px;
    max-width: 835px;
    height: 320px;
`

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

export default function DailyActivity() {
  return (
    <RpCtr height={320}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 100,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={8}
        barGap={10}
      >
        <CartesianGrid strokeDasharray="1" opacity={0.7} vertical={false} />
        <XAxis dy={20} interval="preserveStartEnd" opacity={0.5} tickLine={false} dataKey="name" stroke="#95a5a6"/>
        <YAxis dx={10} axisLine={false} tickLine={false} tickCount={3} orientation="right" stroke="#95a5a6" />
        <Tooltip cursor={{fill: '#C4C4C4'}} active={true}
            wrapperStyle={{
              visibility: 'visible',
            }}
            content={<CustomTooltip />}/>
        <Legend wrapperStyle={{right: '0', top: '0'}} align='right' iconType='circle' iconSize='8'/>'
        <Bar dataKey="pv" fill={`${colors.tertiary}`} radius={[6, 6, 0, 0]} />
        <Bar dataKey="uv" fill={`${colors.primary}`} radius={[6, 6, 0, 0]} />
      </BarChart>
    </RpCtr>
  );
}

function CustomTooltip({active, payload, label}){
  if (active && payload && payload.length) {
    return (
        <StyledTooltip>
          <p>{`${label}`}</p>
          <p>{`${label}`}</p>
        </StyledTooltip>
    )
  } 
  
  return null;
}
