import React from "react";
import * as S from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

export default function Cards({ image, title, location, text, onClick }) {
  return (
    <Card
      sx={{
        maxWidth: "25vw",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <Link to={onClick} style={{ textDecoration: "none" }}>
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
      </Link>
    </Card>
  );
}
