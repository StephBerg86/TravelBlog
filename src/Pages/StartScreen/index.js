import React from "react";
import Cards from "../../Components/Cards";

import * as S from "./styles";
import { data } from "../../Components/Data";

export default function Home() {
  return (
    <S.PageContainer className="Home">
      {data.map((card, index) =>
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
    </S.PageContainer>
  );
}

// card.routes &&
//   card.routes.map((route, routeIndex) => {
//     <Cards
//       key={routeIndex}
//       title={route.title}
//       location={route.location}
//       text={route.text}
//       image={route.image}
//       onClick={route.onClick}
//     />;
//   });
