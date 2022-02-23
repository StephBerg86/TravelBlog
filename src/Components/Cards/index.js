import * as React from "react";
import * as S from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Cards({ image, title, location, text }) {
  return (
    <Card sx={{ width: "25vw" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <S.Location variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {location}
        </S.Location>
        <S.Title variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </S.Title>
        <S.Text variant="body2" color="text.secondary">
          {text}
        </S.Text>
      </CardContent>
    </Card>
  );
}
