import { Typography } from "@mui/material";
import styled from "styled-components";
import { accent } from "./Tokens";

export const CardTitle = styled(Typography)`
  ${accent.brown}
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
`;

export const PageTitle = styled(Typography)`
  ${accent.brown}
  text-transform: uppercase;
  text-align: left;
  &&.MuiTypography-root {
    font-weight: 700;
    font-size: large;
  }
`;
