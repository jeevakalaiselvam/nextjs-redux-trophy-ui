import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GameContent from "../../../components/content/GameContent";
import GameHeader from "../../../components/header/GameHeader";
import { calculateProfileData } from "../../../helpers/profileHelper";
import { HEADER_IMAGE } from "../../../helpers/urlHelper";

const RootContainer = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  animation: ${(props) => (props.gameClicked ? "hide 1s ease" : "")};

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
  min-height: 10vh;
  max-height: 10vh;
  align-items: flex-start;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  min-height: 85vh;
  max-height: 85vh;
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

  return (
    <RootContainer>
      <BackdropContainer>
        <HeaderContainer>
          <GameHeader profileData={profileData} />
        </HeaderContainer>
        <ContentContainer>
          <GameContent profileData={profileData} />
        </ContentContainer>
      </BackdropContainer>
    </RootContainer>
  );
}
