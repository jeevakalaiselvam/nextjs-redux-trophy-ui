import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BRONZE,
  getIconForTrophyType,
  GOLD,
  PLATINUM,
  SILVER,
} from "../../helpers/gameHelper";
import { calculateProfileDataForGame } from "../../helpers/profileHelper";
import { HEADER_IMAGE } from "../../helpers/urlHelper";
import PercentageBar from "./PercentageBar";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  padding: 0rem 2rem;
  height: 140px;
  cursor: pointer;
  border: ${(props) =>
    props.gameHovered ? "1px solid #888592" : "1px solid #88859200"};
  border-radius: 4px;
  box-shadow: ${(props) =>
    props.gameHovered ? "0px 0px 10px rgba(255,255,255,0.5)" : ""};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

const ImageWrapper = styled.div`
  width: 220px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  font-weight: bold;
  height: 100%;
`;

const Name = styled.div`
  display: flex;
  align-items: flex-start;
  height: 50px;
  width: 100%;
  font-size: 2rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: flex-start;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-left: 2rem;
  border: 2px solid #b5b0b1;
`;

const TrophyWrapper = styled.div`
  display: flex;
  width: 420px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
`;

const TrophyNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  width: 220px;
  height: 100px;
  background: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Border = styled.div`
  width: 80%;
  height: 1px;
  background-color: #292b2fdd;
`;

const TrophyPlatinum = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
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

export default function GameRow({ game, gameClickHandler }) {
  const {
    achievements,
    id,
    playtime,
    lastPlayed,
    name,
    version,
    completion,
    toGet,
    recentRefresh,
  } = game;

  const {
    profileLevel,
    totalTrophies,
    platinumTrophies,
    goldTrophies,
    silverTrophies,
    bronzeTrophies,
  } = calculateProfileDataForGame(game);

  const [gameHovered, setGameHovered] = useState(false);

  useEffect(() => {
    if (gameHovered) {
      const timeReference = setTimeout(() => {}, 50);
      return () => {
        clearTimeout(timeReference);
      };
    }
  }, [gameHovered]);

  const mouseEnterHandler = () => {
    setGameHovered(true);
  };
  const mouseLeaveHandler = () => {
    setGameHovered(false);
  };

  return (
    <Container
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      gameHovered={gameHovered}
      onClickCapture={() => {
        try {
          let audio = new Audio("buttonPress.mp3");
          if (audio) {
            audio.play();
          }
        } catch (e) {}
        gameClickHandler(id);
      }}
    >
      <Content>
        <ImageWrapper>
          <Image image={HEADER_IMAGE(id)} />
        </ImageWrapper>
        <NameWrapper>
          <Name>{name}</Name>
          <Tag>PS5</Tag>
        </NameWrapper>
        {completion == 100 && (
          <TrophyPlatinum>
            <TrophyPlatinumIcon icon={getIconForTrophyType(PLATINUM)} />
          </TrophyPlatinum>
        )}

        <PercentageBar completion={completion} />
        <TrophyWrapper>
          <Trophy>
            <TrophyIcon icon={getIconForTrophyType(GOLD)} />
            <TrophyData>{goldTrophies}</TrophyData>
          </Trophy>
          <Trophy>
            <TrophyIcon icon={getIconForTrophyType(SILVER)} />
            <TrophyData>{silverTrophies}</TrophyData>
          </Trophy>
          <Trophy>
            <TrophyIcon icon={getIconForTrophyType(BRONZE)} />
            <TrophyData>{bronzeTrophies}</TrophyData>
          </Trophy>
        </TrophyWrapper>
      </Content>
      <Border></Border>
    </Container>
  );
}
