import React from "react";
import styled from "styled-components";
import { HEADER_IMAGE } from "../../helpers/urlHelper";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  display: flex;
  width: 150px;
  height: 70px;
  background: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  display: flex;
  padding-left: 2rem;
  font-size: 4rem;
  align-items: center;
  justify-content: center;
`;

export default function GameData({ game }) {
  const { name, id, achievements } = game;

  return (
    <Container>
      <Image image={HEADER_IMAGE(id)}></Image>
      <Name>{name}</Name>
    </Container>
  );
}
