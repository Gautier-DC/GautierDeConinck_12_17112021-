import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, ReferenceArea, Tooltip, Legend, ResponsiveContainer, YAxis } from "recharts";
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

const renderCustomizedXTick = (props) => {
	const { x, y, payload } = props;
  
	return (
  	<text x={x-4} y={y + 4} textAnchor="middle" dominantBaseline="hanging">	
      {payload.value}
    </text>
  );
};

function CustomTooltip({ active, payload}) {
  if (active) {
    return (
      <StyledTooltip>
        <p>{`${payload[0].value} min`}</p>
      </StyledTooltip>
    );
  }

  return null;
}

export default function AverageSessions() {
  const [activeLabel, setActiveLabel] = useState("7");

  const [currentSessions, setCurrentSessions] = useState();

  useEffect(() => {
    getUserSessions(18)
    .then((response) =>{
      setCurrentSessions(response.data.data)
      console.log('currentsessions', currentSessions)
      console.log('sessions', response.data.data.sessions)
    })
    .catch(error => {
      console.log(error);
  });
  }, []);

  
  if(!currentSessions){
    return null
  }

  return (
    <RespCtr width="33%" height={263}>
      <LineChart data={currentSessions.sessions} onMouseMove={(e) => setActiveLabel(e.activeLabel)}  margin={{ top: 50 }}>
        <text x={34} y={29} fill="#fff" fontSize={15} opacity={0.5} dominantBaseline="middle">
          Durée moyenne des
        </text>
        <text x={34} y={50} fill="#fff" fontSize={15} opacity={0.5} dominantBaseline="middle">
          sessions
        </text>
        <Line dataKey="sessionLength" type="monotone" dot={false}  stroke="#fff" strokeWidth={2} />
        <XAxis stroke="#bdc3c7" opacity={0.6} axisLine={false} tickLine={false} dataKey="day"  />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceArea  x1={activeLabel} x2="10" y1={0} y2={10000} fill="#fff" strokeOpacity={0.5} />
      </LineChart>
    </RespCtr>
  );
}
