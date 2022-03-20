import React from "react";
import { PageTitle, Text } from "../../Constants/OverallStyles";

export default function Story({ title, location, text, image, alt }) {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Text>{location}</Text>
      <Text>{text}</Text>
      <img src={image} alt={alt} />
    </>
  );
}
