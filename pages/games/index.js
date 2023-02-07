import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GamesContent from "../../components/content/GamesContent";
import GamesHeader from "../../components/header/GamesHeader";
import { addPointsForAchievementsInGames } from "../../helpers/gameHelper";
import { calculateProfileData } from "../../helpers/profileHelper";
import { HEADER_IMAGE } from "../../helpers/urlHelper";

const RootContainer = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  animation: ${(props) => (props.gameClicked ? "hide 2s ease" : "")};

  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const BackdropContainer = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 12vh;
  max-height: 12vh;
  align-items: flex-start;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  min-height: 86vh;
  max-height: 86vh;
  margin-top: 5rem;
  overflow: scroll;
  align-items: flex-start;
  justify-content: center;
`;

export default function GamesPage() {
  const router = useRouter();
  const steamtracker = useSelector((state) => state.steamtracker);
  const { games, settings } = steamtracker;

  const profileData = calculateProfileData(games);

  const [gameClicked, setGameClicked] = useState(false);
  const [gameIdtoMove, setGameIdtoMove] = useState("");

  const gameClickHandler = (gameId) => {
    setGameClicked(true);
    setGameIdtoMove(gameId);
  };

  useEffect(() => {
    if (gameClicked) {
      setTimeout(() => {
        setGameClicked(false);
        router.push(`/games/${gameIdtoMove}`);
      }, 500);
    }
  }, [gameClicked]);

  return (
    <RootContainer gameClicked={gameClicked}>
      <BackdropContainer>
        <HeaderContainer>
          <GamesHeader profileData={profileData} />
        </HeaderContainer>
        <ContentContainer>
          <GamesContent
            profileData={profileData}
            gameClickHandler={gameClickHandler}
          />
        </ContentContainer>
      </BackdropContainer>
    </RootContainer>
  );
}
