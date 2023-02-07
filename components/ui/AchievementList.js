import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ACHIEVEMENT_SORT_PERCENTAGE_HIGH_LOW } from "../../helpers/filterHelper";
import AchievementCard from "./AchievementCard";

const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function AchievementList({
  achievements,
  sortOption,
  gameName,
}) {
  const [sortedAchievements, setSortedAchievements] = useState([]);

  useEffect(() => {
    if (sortOption === ACHIEVEMENT_SORT_PERCENTAGE_HIGH_LOW) {
      let sortedAchievements = achievements.sort(
        (ach1, ach2) => ach2.percentage - ach1.percentage
      );
      setSortedAchievements(sortedAchievements);
    }
  }, [sortOption]);

  return (
    <Container>
      {sortedAchievements.length &&
        sortedAchievements.map((achievement) => {
          return (
            <AchievementCard
              achievement={achievement}
              id={achievement.id}
              gameName={gameName}
            />
          );
        })}
    </Container>
  );
}
