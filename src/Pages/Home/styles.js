import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 1800px; // Aanpassen als er meer stories komen
  width: 100%;
  align-content: center;
  gap: 24px;

  &.short {
    max-height: 500px;
  }
  &.medium {
    max-height: 1000px;
  }
  &.long {
    max-height: 1400;
  }
`;
