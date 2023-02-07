import React, { useState } from "react";
import styled from "styled-components";
import { HEADER_IMAGE } from "../../helpers/urlHelper";

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
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameWrapper = styled.div`
  display: flex;
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

const PercentageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
`;

const TrophyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
`;

const Image = styled.div`
  width: 200px;
  height: 100px;
  background: url("${(props) => props.image}");
  background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Border = styled.div`
  width: 80%;
  height: 1px;
  background-color: #292b2fdd;
`;

export default function GameRow({ game }) {
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

  const [gameHovered, setGameHovered] = useState(false);

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
    >
      <Content>
        <ImageWrapper>
          <Image image={HEADER_IMAGE(id)} />
        </ImageWrapper>
        <NameWrapper>
          <Name>{name}</Name>
          <Tag>PS5</Tag>
        </NameWrapper>
        <PercentageWrapper></PercentageWrapper>
        <TrophyWrapper></TrophyWrapper>
      </Content>
      <Border></Border>
    </Container>
  );
}
