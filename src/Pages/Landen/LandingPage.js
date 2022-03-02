import React from "react";
import * as S from "./styles";
import { cardsData } from "../../Components/Data";
import Cards from "../../Components/Cards";

export default function LandingPage() {
  return (
    // Landingspage van landen. Met Map dezelfde pagina genereren voor alle landen met text vanuit de data
    <S.PageContainer className="Home">
      {cardsData.map((card, index) =>
        card.homepage ? (
          <Cards
            key={index}
            title={card.title}
            location={card.location}
            text={card.text}
            image={card.image}
            onClick={card.onClick}
          />
        ) : (
          ""
        )
      )}
    </S.PageContainer>
  );
}
