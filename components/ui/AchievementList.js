import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import AchievementCard from "./AchievementCard";

const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function AchievementList({ game }) {
  const { achievements } = game;

  return (
    <Container>
      {achievements.length &&
        achievements.map((achievement) => {
          return (
            <AchievementCard achievement={achievement} id={achievement.id} />
          );
        })}
    </Container>
  );
}
