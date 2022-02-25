import React from "react";
import Cards from "../../Components/Cards";
import { cardsData } from "../../Components/Data";

import * as S from "./styles";

export default function Route() {
  return (
    <S.PageContainer className="Home">
      {cardsData.map((card, index) =>
        card.category === "route" ? (
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
