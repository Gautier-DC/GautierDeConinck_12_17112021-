import { useEffect, useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Error from "../Error";
import DailyActivity from "../DailyActivity";
import AverageSessions from "../AverageSessions";
import RadarStats from "../RadarStats";
import ScoreChart from "../ScoreChart";
import { Models } from "../../models";

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1em;
  @media (min-width: 1200px) {
    max-width: 835px;
    width: 70%;
    margin-bottom: 0;
  }
`;

const UnderDshbrd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 50%;
`;

function LeftDashboard({ userScore, Id }) {
  const [currentSessions, setCurrentSessions] = useState();
  const [currentActivity, setCurrentActivity] = useState();
  const [currentPerf, setCurrentPerf] = useState();
  const [currentError, setCurrentError] = useState();

  useEffect(() => {
    setCurrentError(undefined);
    Models.getUserSessions(Id)
      .then((response) => {
        setCurrentSessions(response);
      })
      .catch((error) => {
        console.log(error);
        setCurrentError(error);
      });
    Models.getUserActivity(Id)
      .then((response) => {
        setCurrentActivity(response);
      })
      .catch((error) => {
        console.log(error);
        setCurrentError(error.response);
      });
    Models.getUserPerf(Id)
      .then((response) => {
        setCurrentPerf(response);
      })
      .catch((error) => {
        console.log(error);
        setCurrentError(error.response);
      });
  }, [Id]);

  return (
    <LeftContainer>
      {currentError ? (
        <Error currentError={currentError} />
      ) : (
        <>
          <DailyActivity activity={currentActivity} />
          <UnderDshbrd>
            <AverageSessions sessions={currentSessions} />
            <RadarStats perf={currentPerf} />
            <ScoreChart score={userScore} />
          </UnderDshbrd>
        </>
      )}
    </LeftContainer>
  );
}

export default LeftDashboard;

LeftDashboard.propTypes = {
  userScore: propTypes.number,
  Id: propTypes.number,
};
