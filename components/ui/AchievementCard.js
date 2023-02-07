import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import {
  getIconForTrophyType,
  getRarityIcon,
  getRarityTitle,
  getTrophyNameForType,
} from "../../helpers/gameHelper";
import { getIconTypeForPercentage } from "../../helpers/profileHelper";

const Container = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #0c1015;
  margin-top: 2rem;
  border-radius: 8px;
  padding: 0rem 2rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  background: url(${(props) => props.icon});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const DataWrapper = styled.div`
  display: flex;
  padding: 0rem 1rem;
  flex-direction: column;
  height: 100%;
  align-content: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  padding: 1rem 1rem;
  align-content: flex-start;
  font-size: 2rem;
  font-weight: 800;
  justify-content: flex-start;
`;

const Meta = styled.div`
  display: flex;
  padding: 1rem 1rem;
  align-content: center;
  flex-direction: column;
  font-size: 2rem;
  min-height: 80px;
  font-weight: 700;
  justify-content: center;
`;

const TypeWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  font-weight: 600;
  height: 30px;
`;

const RarityWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  height: 30px;
  font-weight: 600;
`;

const TypeIcon = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background: url("/${(props) => props.icon}");
  background-size: contain;
  background-repeat: no-repeat;
`;

const TypeIconInner = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background: url("/${(props) => props.icon}");
  background-size: contain;
  background-repeat: no-repeat;
`;

const TypeTitle = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-left: 0.5rem;
  transform: translateY(-4px);
  color: #707276;
`;

const RarityIcon = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25px;
  height: 25px;
`;

const RarityIconInner = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: url("/${(props) => props.icon}");
  background-size: contain;
  background-repeat: no-repeat;
  transform: translateY(2px);
`;

const RarityTitle = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-left: 0.5rem;
  transform: translateY(-4px);
  color: #707276;
`;

const Start = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 100px;
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10px;
`;

const End = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  padding-left: 1rem;
`;

const UnlockTimeWrapper = styled.div`
  display: flex;
  padding: 2rem 1rem;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
  min-height: 100%;
`;

const UnlockIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  background: url("/unlockIcon.png");
  background-size: contain;
  background-repeat: no-repeat;
  align-content: center;
  justify-content: center;
`;

const Unlocktime = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-left: 0.5rem;
  align-content: center;
  justify-content: flex-start;
  font-size: 2rem;
`;

const Divider = styled.div`
  display: flex;
  padding: 0rem 1rem;
  width: 2px;
  flex-direction: column;
  height: 100%;
  align-content: center;
  justify-content: center;
  color: #707276;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  padding: 0rem 1rem;
  flex-direction: column;
  height: 100%;
  align-content: center;
  justify-content: center;
`;

export default function AchievementCard({ achievement }) {
  const {
    name,
    displayName,
    description,
    icon,
    percentage,
    achieved,
    unlocktime,
  } = achievement;

  const trophyType = getIconTypeForPercentage(percentage);

  return (
    <Container>
      <IconWrapper>
        <Icon icon={icon}></Icon>
      </IconWrapper>
      <DataWrapper>
        <Title>{displayName}</Title>
        <Meta>
          <TypeWrapper>
            <TypeIcon>
              <TypeIconInner icon={getIconForTrophyType(trophyType)} />
            </TypeIcon>
            <TypeTitle>{getTrophyNameForType(trophyType)}</TypeTitle>
          </TypeWrapper>
          <RarityWrapper>
            <RarityIcon>
              <RarityIconInner icon={getRarityIcon(percentage)} />
            </RarityIcon>
            <RarityTitle>
              <Start>{getRarityTitle(percentage)}</Start>
              <Middle>|</Middle>
              <End>{percentage.toFixed(1)} % of players have earned</End>
            </RarityTitle>
          </RarityWrapper>
        </Meta>
      </DataWrapper>
      <UnlockTimeWrapper>
        <UnlockIcon></UnlockIcon>
        <Unlocktime>
          {achieved == 1
            ? `${new Date(unlocktime * 1000)
                .toString()
                .slice(0, -40)}, ${new Date(unlocktime * 1000).toLocaleString(
                "en-US",
                {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }
              )}`
            : ""}
        </Unlocktime>
      </UnlockTimeWrapper>
      <Divider></Divider>
      <DescriptionWrapper></DescriptionWrapper>
    </Container>
  );
}
