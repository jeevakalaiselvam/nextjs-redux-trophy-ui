import React from "react";
import styled from "styled-components";

const PercentageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem 0.5rem;
  margin: ${(props) => props.margin};
`;

const PercentageTitle = styled.div`
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2.5rem;
  color: #9496a0;
`;

const Percentage = styled.div`
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 3rem;
`;

const PercentageNumber = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 0.5rem;
  justify-content: center;
`;

const PercentageSymbol = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 3rem;
  justify-content: flex-end;
`;

const PercentageBarWrapper = styled.div`
  width: 110px;
  display: flex;
  padding-top: 1rem;
  align-items: flex-start;
  justify-content: center;
`;

const PercentageBarMain = styled.div`
  width: 110px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #353840;
  height: 4px;
  position: relative;
`;

const PercentageBarInner = styled.div`
  width: ${(props) => `${props.completion}px`};
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 8px;
  background-color: #a8a8ac;
  height: 4px;
`;

export default function PercentageBarWithTitle({ completion, margin }) {
  return (
    <PercentageWrapper margin={margin}>
      <PercentageTitle>Progress</PercentageTitle>
      <Percentage>
        <PercentageNumber>{completion}</PercentageNumber>
        <PercentageSymbol>%</PercentageSymbol>
      </Percentage>
      <PercentageBarWrapper>
        <PercentageBarMain>
          <PercentageBarInner
            completion={(completion / 100) * 110}
          ></PercentageBarInner>
        </PercentageBarMain>
      </PercentageBarWrapper>
    </PercentageWrapper>
  );
}
