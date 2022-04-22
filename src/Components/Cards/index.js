import React from "react";
import * as S from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { CardTitle } from "../../Constants/OverallStyles";

export default function Cards({
  image,
  title,
  location,
  text,
  onClick,
  widthCard,
  heightCard,
  paddingText,
  heightImage,
  alt,
  marginCard,
  marginBottom,
}) {
  const widthC = widthCard ? widthCard : "24vw";
  const heightC = heightCard ? heightCard : "";
  const heightI = heightImage ? heightImage : "140";
  const paddingT = paddingText ? paddingText : "";
  const margin = marginCard ? marginCard : "";
  const marginB = marginBottom ? marginBottom : "";

  return (
    <Card
      sx={{
        width: widthC,
        height: heightC,
        margin: margin,
        marginBottom: marginB,
      }}
    >
      <CardMedia component="img" height={heightI} image={image} alt={alt} />
      <Link to={onClick} style={{ textDecoration: "none" }}>
        <CardContent sx={{ padding: paddingT, paddingBottom: 0 }}>
          {location && (
            <S.Location variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {location}
            </S.Location>
          )}
          {title && (
            <CardTitle variant="h6" sx={{ fontWeight: "bold" }}>
              {title}
            </CardTitle>
          )}
          {text && (
            <S.Text variant="body2" color="text.secondary">
              {text}
            </S.Text>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
