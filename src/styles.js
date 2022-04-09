import styled from "styled-components";
import BackgroundImage from "./background.jpg";
import { backgrounds } from "./Constants/Tokens";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;

export const PageContainer = styled.div`
  align-self: center;
  width: 80vw;
  margin: 25px 0;
  ${backgrounds.primary};

  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ContentContainer = styled.div`
  margin: 16px 36px;
`;
