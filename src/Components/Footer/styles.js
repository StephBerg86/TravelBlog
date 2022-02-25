import styled from "styled-components";
import { backgrounds } from "../../Constants/Tokens";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${backgrounds.secondary}
`;
