import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 1600px; // Aanpassen als er meer stories komen
  width: 100%;
  align-content: center;
  gap: 24px;
  /* background-color: blue; */
  &.short {
    /* background-color: red; */
    max-height: 500px;
  }
  &.medium {
    /* background-color: purple; */
    max-height: 900px;
  }
  &.long {
    /* background-color: green; */
    max-height: 1400;
  }
`;
