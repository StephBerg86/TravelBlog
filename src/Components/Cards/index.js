import React from "react";
import * as S from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { CardTitle } from "../../Constants/OverallStyles";

export default function Cards({ title, location, text, image, alt, onClick }) {
  return (
    <Card
      sx={{
        width: "24vw",
      }}
    >
      <CardMedia component="img" height="140" image={image} alt={alt} />
      <Link to={onClick} style={{ textDecoration: "none" }}>
        <CardContent sx={{ paddingBottom: 0 }}>
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
