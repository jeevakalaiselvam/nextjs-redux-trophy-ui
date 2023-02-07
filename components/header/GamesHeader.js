import React from "react";
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
import { calculateProfileData } from "../../helpers/profileHelper";

const Container = styled.div`
  min-width: 100%;
  display: flex;
  padding: 5rem 1rem 1rem 1rem;
  align-items: center;
  justify-content: center;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 20rem;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 300;
  color: #fefefecc;
`;

const Level = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
  justify-content: center;
`;

const Total = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Trophy = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LevelIcon = styled.div`
  display: flex;
  align-items: center;
  width: 55px;
  height: 55px;
  justify-content: center;
  background: url("${(props) => props.iconSource}");
  background-repeat: no-repeat;
  background-size: contain;
`;

const LevelData = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 1rem;
  color: #d7d9da;
  font-size: 4rem;
  justify-content: flex-end;
`;

const TotalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #8d9098;
`;

const TotalData = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  justify-content: center;
`;

const TrophyIcon = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 80px;
  justify-content: center;
  background: url("${(props) => props.icon}");
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

export default function GamesHeader({ profileData }) {
  const {
    profileLevel,
    totalTrophies,
    platinumTrophies,
    goldTrophies,
    silverTrophies,
    bronzeTrophies,
  } = profileData;

  return (
    <Container>
      <LeftContainer>
        <Title>Trophies</Title>
      </LeftContainer>
      <RightContainer>
        <Level>
          <LevelIcon iconSource={getTrophyIconForLevel(profileLevel)} />
          <LevelData>{profileLevel}</LevelData>
        </Level>
        <Total>
          <TotalTitle>Total</TotalTitle>
          <TotalData>{totalTrophies}</TotalData>
        </Total>
        <Trophy>
          <TrophyIcon icon={getIconForTrophyType(PLATINUM)} />
          <TrophyData>{platinumTrophies}</TrophyData>
        </Trophy>
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
      </RightContainer>
    </Container>
  );
}
