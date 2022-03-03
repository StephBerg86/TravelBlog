import React from "react";
import Cards from "../../Components/Cards";
import { data } from "../../Components/Data";
import { PageTitle, Text } from "../../Constants/OverallStyles";

import * as S from "./styles";

export default function Tips() {
  return (
    <>
      <PageTitle>Tips</PageTitle>
      <Text>
        Hier vind je allerlei soorten reistips, handige reisinformatie en
        reisnieuws dat je niet mag missen! Van inspirerende reisquotes en
        interessante aanbiedingen tot websites die je als echte reiziger gezien
        moet hebben. Laat je inspireren voor je volgende vakantie
      </Text>
      <S.PageContainer className="Home">
        {data.map(
          (card) =>
            card.stories &&
            card.stories.map((story, storyIndex) => (
              <Cards
                key={storyIndex}
                title={story.title}
                location={story.location}
                text={story.text}
                image={story.image}
                alt={story.alt}
                onClick={story.onClick}
              />
            ))
        )}
      </S.PageContainer>
    </>
  );
}
