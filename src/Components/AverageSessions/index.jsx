import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from "recharts";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import propTypes from "prop-types";

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


/**
 * Create a custom cursor on mouse over the charts
 * @param {number} param0 
 * @returns HTML element
 */
export function StyledDot({ cx, cy }) {
  return (
    <svg>
      <circle cx={cx} cy={cy} r={9} stroke="#FFFFFF0" fill="#FFF" fillOpacity={0.2}/>
      <circle cx={cx} cy={cy} r={3} stroke="#FFFFFF" fill="#FFFFFF" />
      <rect x={cx} y={0} width="100%" height="100%" fill="#00000020" />
    </svg>
  );
}


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


/**
 * Change labels of the Xaxis
 * @param {number} value 
 * @returns string
 */
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

export default function AverageSessions({sessions}) {

  if (!sessions) {
    return null;
  }

  return (
    <RespCtr width="33%" height={263}>
      <LineChart data={sessions.sessions} margin={{ left: -5, bottom: -30 }}>
        <text x={34} y={29} fill="#fff" fontSize={15} opacity={0.5} dominantBaseline="middle">
          Durée moyenne des
        </text>
        <text x={34} y={50} fill="#fff" fontSize={15} opacity={0.5} dominantBaseline="middle">
          sessions
        </text>
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line activeDot={StyledDot} dataKey="sessionLength" type="monotone" dot={false} stroke="#fff" strokeWidth={2} />
        <XAxis dy={-40} stroke="#bdc3c7" opacity={0.6} axisLine={false} tickLine={false} dataKey="day" interval="preserveStartEnd" tick={{
            fill: "#FFFFFF75",
            fontFamily: "Roboto",
            fontSize: "12px",
          }} tickFormatter={formatXAxis} />
        <YAxis domain={[0,80]} hide={true} />
      </LineChart>
    </RespCtr>
  );
}

AverageSessions.propTypes = {
  sessions: propTypes.object,
}


