import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { calculateProfileData } from "../../helpers/profileHelper";

const Container = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20rem;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  justify-content: center;
`;

const LevelIcon = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  justify-content: center;
  background: url("${(props) => props.iconSource}");
  background-repeat: no-repeat;
  background-size: contain;
`;

const LevelData = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #d7d9da;
  font-size: 4rem;
  justify-content: center;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TotalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TotalData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Trophy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrophyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrophyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function GamesHeader({ profileData }) {
  const {
    profileLevel,
    totalTrophies,
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
          <LevelIcon iconSource={"4.png"} />
          <LevelData>{profileLevel}</LevelData>
        </Level>
        <Trophy>
          <TrophyIcon></TrophyIcon>
          <TrophyData></TrophyData>
        </Trophy>
      </RightContainer>
    </Container>
  );
}
