import React from "react";
import styled from "styled-components";

const CompletionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem 1rem;
`;

const CompletionTitle = styled.div`
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #9496a0;
`;

const Completion = styled.div`
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const CompletionNumber = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 0.5rem;
  justify-content: center;
`;

export default function CompletedTrophies({ toGet, total }) {
  return (
    <CompletionWrapper>
      <CompletionTitle>Earned</CompletionTitle>
      <Completion>
        <CompletionNumber>
          {total - toGet} / {total}
        </CompletionNumber>
      </Completion>
    </CompletionWrapper>
  );
}
