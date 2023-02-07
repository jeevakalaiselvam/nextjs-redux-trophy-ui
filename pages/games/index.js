import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GamesContent from "../../components/content/GamesContent";
import GamesHeader from "../../components/header/GamesHeader";
import { calculateProfileData } from "../../helpers/profileHelper";
import { HEADER_IMAGE } from "../../helpers/urlHelper";

const RootContainer = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  background: url("background.png");
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
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
  min-height: 90vh;
  max-height: 90vh;
  align-items: flex-start;
  padding: 2rem;
  justify-content: center;
`;

export default function GamesPage() {
  const router = useRouter();
  const steamtracker = useSelector((state) => state.steamtracker);
  const { games, settings } = steamtracker;

  const profileData = calculateProfileData(games);

  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    if (!Object.keys(games).length > 0) {
      router.push("/");
    } else {
      const randomGameId = games[Math.floor(Math.random() * games.length)].id;
      console.log(randomGameId);
      setBackgroundImage(HEADER_IMAGE("677160"));
    }
  }, []);

  return (
    <RootContainer backgroundImage={backgroundImage}>
      <BackdropContainer>
        <HeaderContainer>
          <GamesHeader profileData={profileData} />
        </HeaderContainer>
        <ContentContainer>
          <GamesContent profileData={profileData} />
        </ContentContainer>
      </BackdropContainer>
    </RootContainer>
  );
}
