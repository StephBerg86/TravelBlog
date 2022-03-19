import React from "react";
import Cards from "../../Components/Cards";
import { data } from "../../Components/Data";
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
        {data.map(
          (card, index) =>
            card.routes &&
            card.routes.map((route, routeIndex) =>
              route.category === "card" ? (
                <Cards
                  key={routeIndex}
                  title={route.title}
                  location={route.location}
                  text={route.text}
                  image={route.image}
                  alt={route.alt}
                  onClick={route.onClick}
                />
              ) : (
                ""
              )
            )
        )}
      </S.PageContainer>
    </>
  );
}
