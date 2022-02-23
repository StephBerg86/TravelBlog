import { Typography } from "@mui/material";
import styled from "styled-components";
import { accent } from "../../Constants/Tokens";

export const Location = styled(Typography)`
  ${accent.greenBlue}
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
`;

export const Title = styled(Typography)`
  ${accent.greyBrown}
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
`;

export const Text = styled(Typography)`
  ${accent.greyBrown}

  text-align: left;
`;
