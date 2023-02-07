import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  BRONZE,
  getIconForTrophyType,
  getTrophyIconForLevel,
  GOLD,
  PLATINUM,
  SILVER,
} from "../../helpers/gameHelper";
import {
  calculateProfileData,
  calculateProfileDataForGame,
} from "../../helpers/profileHelper";
import CompletedTrophies from "../ui/CompletedTrophies";
import GameData from "../ui/GameData";
import PercentageBarWithTitle from "../ui/PercentageBarWithTitle";

const Container = styled.div`
  min-width: 100%;
  display: flex;
  padding: 1rem 1rem 1rem 1rem;
  align-items: center;
  justify-content: center;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 25rem;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-right: 10rem;
`;

const TrophyPlatinum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrophyWrapper = styled.div`
  display: flex;
  width: 420px;
  align-items: center;
  justify-content: center;
  padding: 3rem 0.5rem 1rem 0.5rem;
`;

const TrophyPlatinumIcon = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 80px;
  justify-content: center;
  background: url("/${(props) => props.icon}");
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 3rem;
`;

const Trophy = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TrophyIcon = styled.div`
  display: flex;
  align-items: center;
  width: 55px;
  height: 55px;
  justify-content: center;
  background: url("/${(props) => props.icon}");
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 2.5rem;
`;

const TrophyData = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.1rem;
  font-size: 2.5rem;
  height: 60px;
  justify-content: center;
`;

export default function GameHeader() {
  const router = useRouter();
  const steamtracker = useSelector((state) => state.steamtracker);
  const { games, settings } = steamtracker;

  const [gameId, setGameId] = useState("");
  const [game, setGame] = useState("");
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const gameId = router.query.gameId;
    if (gameId) {
      setGameId(gameId);
    }
  }, [router.query.gameId]);

  useEffect(() => {
    const game = games.length > 0 && games.find((game) => game.id == gameId);
    setGame(game);
  }, [gameId]);

  useEffect(() => {
    const profileData = calculateProfileDataForGame(game);
    setProfileData(profileData);
  }, [game]);

  return (
    <Container>
      {game && (
        <LeftContainer>
          <GameData game={game} />
        </LeftContainer>
      )}
      {game && (
        <RightContainer>
          {game.completion == 100 && (
            <TrophyPlatinum>
              <TrophyPlatinumIcon icon={getIconForTrophyType(PLATINUM)} />
            </TrophyPlatinum>
          )}
          <PercentageBarWithTitle
            completion={game.completion}
            margin={"0rem 3rem 0rem 0rem"}
          />
          <CompletedTrophies
            toGet={game.toGet}
            total={game.achievements.length}
          />
          <TrophyWrapper>
            <Trophy>
              <TrophyIcon icon={getIconForTrophyType(GOLD)} />
              <TrophyData>{profileData.goldTrophies}</TrophyData>
            </Trophy>
            <Trophy>
              <TrophyIcon icon={getIconForTrophyType(SILVER)} />
              <TrophyData>{profileData.silverTrophies}</TrophyData>
            </Trophy>
            <Trophy>
              <TrophyIcon icon={getIconForTrophyType(BRONZE)} />
              <TrophyData>{profileData.bronzeTrophies}</TrophyData>
            </Trophy>
          </TrophyWrapper>
        </RightContainer>
      )}
    </Container>
  );
}
