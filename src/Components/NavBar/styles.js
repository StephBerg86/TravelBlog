import styled from "styled-components";
import { accent } from "../../Constants/Tokens";
import { Link as rrdLink } from "react-router-dom";

export const Container = styled.div`
  height: 60px;
  background-color: transparent;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 36px;
`;

export const NavText = styled.p`
  margin: 14px 20px;
  font-family: Montserrat;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  ${accent.brown}
`;

export const Logo = styled.p`
  font-family: Montserrat;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  ${accent.brown}
  text-decoration: none;
`;

export const Link = styled(rrdLink)`
  text-decoration: none;
  ${accent.brown}
  &:hover {
    transform: scale(1.02);
    text-decoration: underline;
  }
`;
