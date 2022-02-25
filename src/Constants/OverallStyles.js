import { Typography } from "@mui/material";
import styled from "styled-components";
import { accent } from "./Tokens";
import { Link } from "react-router-dom";

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
    margin-bottom: 16px;
  }
`;

export const SubTitle = styled(Typography)`
  ${accent.brown}
  text-transform: uppercase;
  text-align: left;
  &&.MuiTypography-root {
    font-size: smaller;
  }
`;

export const Text = styled(Typography)`
  ${accent.brown}
  text-align: left;
  &&.MuiTypography-root {
    font-size: smaller;
    margin-bottom: 16px;
  }
`;

export const LinkText = styled(Link)`
  ${accent.brown}
  font-weight: 700;
`;
