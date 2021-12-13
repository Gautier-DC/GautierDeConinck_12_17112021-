import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, ReferenceArea, ReferenceLine, Tooltip, Legend, ResponsiveContainer, YAxis } from "recharts";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { getUserSessions } from "../../callAPI";

const RespCtr = styled(ResponsiveContainer)`
  background-color: ${colors.primary};
  border-radius: 5px;
`;

const StyledTooltip = styled.div`
  background-color: #fff;
  color: ${colors.tertiary};
  font-size: 0.5em;
  text-align: center;
  height: 25px;
  min-width: 39px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCursor = styled.div`
  background-color: #fff;
  opacity: 0.5;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    background-color: #fff;
    opacity: 0.5;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
`;

// const renderCustomizedXTick = (props) => {
//   const { x, y, payload } = props;

//   return (
//     <text x={x - 4} y={y + 4} textAnchor="middle" dominantBaseline="hanging">
//       {payload.value}
//     </text>
//   );
// };

function CustomTooltip({ active, payload }) {
  if (active) {
    return (
      <StyledTooltip>
        <p>{`${payload[0].value} min`}</p>
      </StyledTooltip>
    );
  }

  return null;
}

function CustomCursor({ active }) {
  if (active) {
    return (
      <StyledCursor>
        <div></div>
      </StyledCursor>
    );
  }

  return null;
}

function formatXAxis(value) {
  if(value === 1) return "L"
  if(value === 2) return "M"
  if(value === 3) return "M"
  if(value === 4) return "J"
  if(value === 5) return "V"
  if(value === 6) return "S"
  if(value === 7) return "D"
  return value
}

export default function AverageSessions() {
  const [activeLabel, setActiveLabel] = useState("7");

  const [currentSessions, setCurrentSessions] = useState();

  useEffect(() => {
    getUserSessions(18)
      .then((response) => {
        setCurrentSessions(response.data.data);
        console.log("currentsessions", currentSessions);
        console.log("sessions", response.data.data.sessions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!currentSessions) {
    return null;
  }

  return (
    <RespCtr width="33%" height={263}>
      <LineChart data={currentSessions.sessions} onMouseMove={(e) => setActiveLabel(e.activeLabel)} margin={{ left: -5, bottom: -30 }}>
        <text x={34} y={29} fill="#fff" fontSize={15} opacity={0.5} dominantBaseline="middle">
          Durée moyenne des
        </text>
        <text x={34} y={50} fill="#fff" fontSize={15} opacity={0.5} dominantBaseline="middle">
          sessions
        </text>
        <Tooltip cursor={<CustomCursor/>} content={<CustomTooltip />} />
        <ReferenceArea x1={activeLabel} x2={currentSessions.sessions.lenght} y1={0} y2={80} stroke="#000" strokeOpacity={0.1} fill="#000" fillOpacity={0.1} />
        <Line dataKey="sessionLength" type="monotone" dot={false} stroke="#fff" strokeWidth={2} />
        <XAxis dy={-40} stroke="#bdc3c7" opacity={0.6} axisLine={false} tickLine={false} dataKey="day" interval="preserveStartEnd" tickFormatter={formatXAxis} />
        <YAxis domain={[0,80]} hide={true} />
      </LineChart>
    </RespCtr>
  );
}


