import { Typography } from "@mui/material";
import styled from "styled-components";
import { accent } from "../../Constants/Tokens";

export const Location = styled(Typography)`
  ${accent.orange}
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
`;

export const Title = styled(Typography)`
  ${accent.brown}
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
`;

export const Text = styled(Typography)`
  ${accent.brown}
  text-align: left;
`;
