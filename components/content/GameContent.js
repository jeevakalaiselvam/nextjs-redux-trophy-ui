import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ACHIEVEMENT_SORT_PERCENTAGE_HIGH_LOW } from "../../helpers/filterHelper";
import { calculateProfileDataForGame } from "../../helpers/profileHelper";
import AchievementList from "../ui/AchievementList";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  min-height: 85vh;
  max-height: 85vh;
  justify-content: center;
`;

const FirstRow = styled.div`
  width: 72%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ListContainer = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  overflow: scroll;
  align-items: flex-start;
  justify-content: center;
`;

const TrophyStatus = styled.div`
  display: flex;
  flex: 1;
  font-size: 2rem;
  align-items: center;
  justify-content: flex-start;
`;

const SortStatus = styled.div`
  display: flex;
  font-size: 2rem;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export default function GameContent() {
  const router = useRouter();
  const steamtracker = useSelector((state) => state.steamtracker);
  const { games, settings } = steamtracker;

  const gameId = router.query.gameId;

  const game = games.length > 0 && games.find((game) => game.id == gameId);

  const { achievements } = game;

  const {
    profileLevel,
    totalTrophies,
    platinumTrophies,
    goldTrophies,
    silverTrophies,
    bronzeTrophies,
  } = calculateProfileDataForGame(game);

  return (
    <Container>
      {game && (
        <FirstRow>
          <TrophyStatus>All Trophies: {game.achievements.length}</TrophyStatus>
          <SortStatus>Sort by: Percentage (Low - High)</SortStatus>
        </FirstRow>
      )}
      <ListContainer>
        {game && (
          <AchievementList
            achievements={game.achievements}
            sortOption={ACHIEVEMENT_SORT_PERCENTAGE_HIGH_LOW}
            gameName={game.name}
          />
        )}
      </ListContainer>
    </Container>
  );
}
