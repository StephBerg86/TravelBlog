import React from "react";
import Cards from "../../Components/Cards";

import * as S from "./styles";
import { cardsData } from "../../Components/Data";

export default function Home() {
  return (
    <S.PageContainer className="Home">
      {cardsData.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          location={card.location}
          text={card.text}
          image={card.image}
          onClick={card.onClick}
        />
      ))}
    </S.PageContainer>
  );
}
