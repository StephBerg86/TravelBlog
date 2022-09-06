import { Typography } from "@mui/material";
import styled from "styled-components";
import { accent } from "./Tokens";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

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
  ${accent.dark}
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

export const RouteInfo = styled(Typography)`
  ${accent.brown}
  text-align: left;
  &&.MuiTypography-root {
    font-size: smaller;
    text-decoration: underline;
    min-width: 80px;
  }
`;

export const LinkText = styled(Link)`
  ${accent.brown}
  font-weight: 700;
`;

export const Location = styled(Typography)`
  ${accent.orange}
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
`;

export const ListItem = styled(Typography)`
  ${accent.brown}
  text-align: left;
  &&.MuiTypography-root {
    font-size: smaller;
  }
`;

export const Button = styled.button`
  ${accent.button}
  width: 100px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
`;

export const Item = styled(MenuItem)`
  font-size: 1rem;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
`;
