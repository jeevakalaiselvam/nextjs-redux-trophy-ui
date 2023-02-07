import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GameRow from "../ui/GameRow";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default function GamesContent({ gameClickHandler }) {
  const router = useRouter();
  const steamtracker = useSelector((state) => state.steamtracker);
  const { games, settings } = steamtracker;

  const [gamesFiltered, setGamesFiltered] = useState([]);

  useEffect(() => {
    if (games.length > 0) {
      const gamesWithAchievements = games.filter(
        (game) => game.achievements && game.achievements.length > 0
      );
      const gamesSortedByRecent = gamesWithAchievements.sort(
        (game1, game2) => game2.lastPlayed - game1.lastPlayed
      );
      setGamesFiltered(gamesSortedByRecent);
    }
  }, [games]);

  return (
    <Container>
      {gamesFiltered.map((game) => {
        return (
          <GameRow
            id={game.id}
            game={game}
            gameClickHandler={gameClickHandler}
          />
        );
      })}
    </Container>
  );
}
