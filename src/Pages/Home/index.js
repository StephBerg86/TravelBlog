import React from "react";
import Cards from "../../Components/Cards";

import * as S from "./styles";
import { data } from "../../Components/Data";
import { PageTitle, Text } from "../../Constants/OverallStyles";

export default function Home() {
  return (
    <>
      <PageTitle>Welkom titel</PageTitle>
      <Text>
        Introtext uitleg dat dit overzichtspagina is met uitgelichte verhalen en
        dat de rest van de tips en routes via het navigatiemenu te vinden zijn.
      </Text>
      <S.PageContainer className="Home">
        {data.map((card) =>
          card.stories
            ? card.stories.map((story, storyIndex) =>
                story.category === "card" ? (
                  <Cards
                    key={storyIndex}
                    title={story.title}
                    location={story.location}
                    text={story.text}
                    image={story.image}
                    alt={story.alt}
                    onClick={story.onClick}
                  />
                ) : (
                  ""
                )
              )
            : ""
        )}
      </S.PageContainer>
    </>
  );
}
