import styled from "styled-components";
import { accent } from "../../Constants/Tokens";

export const Container = styled.div`
  height: 48px;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavText = styled.p`
  margin: 14px 5px;
  font-family: Montserrat;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  ${accent.greyBrown}
`;
