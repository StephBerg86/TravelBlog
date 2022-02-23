import React from "react";
import Cards from "../../Components/Cards";

import NavBar from "../../Components/NavBar";
import * as S from "./styles";
import { cardsData } from "../../Components/Data";

export default function Home() {
  return (
    <S.Background>
      <S.PageContainer>
        <NavBar />
        <S.ContentContainer>
          {cardsData.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              location={card.location}
              text={card.text}
              image={card.image}
            />
          ))}
        </S.ContentContainer>
      </S.PageContainer>
    </S.Background>
  );
}
