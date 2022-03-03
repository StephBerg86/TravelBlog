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
  heightImage,
  alt,
  marginCard,
}) {
  const width = widthCard ? widthCard : "25vw";
  const height = heightImage ? heightImage : "140";
  const margin = marginCard ? marginCard : "";

  return (
    <Card
      sx={{
        width: width,
        margin: margin,
      }}
    >
      <CardMedia component="img" height={height} image={image} alt={alt} />
      <Link to={onClick} style={{ textDecoration: "none" }}>
        <CardContent>
          <S.Location variant="subtitle2" sx={{ fontWeight: "bold" }}>
            {location}
          </S.Location>
          <CardTitle variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </CardTitle>
          <S.Text variant="body2" color="text.secondary">
            {text}
          </S.Text>
        </CardContent>
      </Link>
    </Card>
  );
}
