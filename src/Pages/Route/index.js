import React from "react";
import Cards from "../../Components/Cards";
import { cardsData } from "../../Components/Data";
import { PageTitle, Text } from "../../Constants/OverallStyles";

import * as S from "./styles";

export default function Route() {
  return (
    <>
      <PageTitle>Routes</PageTitle>
      <Text>
        Hier vind je allerlei soorten reistips, handige reisinformatie en
        reisnieuws dat je niet mag missen! Van inspirerende reisquotes en
        interessante aanbiedingen tot websites die je als echte reiziger gezien
        moet hebben. Laat je inspireren voor je volgende vakantie
      </Text>
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
    </>
  );
}
