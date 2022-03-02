import React from "react";
import Cards from "../../Components/Cards";

import * as S from "./styles";
import { data } from "../../Components/Data";

export default function Home() {
  return (
    <S.PageContainer className="Home">
      {data.map((card) =>
        card.stories
          ? card.stories.map((story, storyIndex) =>
              story.homepage ? (
                <Cards
                  key={storyIndex}
                  title={story.title}
                  location={story.location}
                  text={story.text}
                  image={story.image}
                  onClick={story.onClick}
                />
              ) : (
                ""
              )
            )
          : ""
      )}
      {data.map((card) =>
        card.routes
          ? card.routes.map((route, routeIndex) =>
              route.homepage ? (
                <Cards
                  key={routeIndex}
                  title={route.title}
                  location={route.location}
                  text={route.text}
                  image={route.image}
                  onClick={route.onClick}
                />
              ) : (
                ""
              )
            )
          : ""
      )}
    </S.PageContainer>
  );
}
