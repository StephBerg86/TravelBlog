import React, { useContext } from "react";
import Cards from "../../Components/Cards";

import * as S from "./styles";
import { data } from "../../Components/DataReisverhalen";
import { PageTitle, Text } from "../../Constants/OverallStyles";
import { AppContext } from "../../App";

export default function Home() {
  const appContext = useContext(AppContext);
  const { selectedCountries } = appContext;

  let newDataArray = data.filter((ele) => {
    if (selectedCountries.includes(ele.location)) {
      return ele;
    }
    return null;
  });

  let nrOfCards = newDataArray.reduce((res, ele) => {
    let num = ele.stories.reduce(
      (r, e) => (e.category === "card" ? r + 1 : r),
      0
    );
    return res + num;
  }, 0);

  let class_name;
  if (nrOfCards < 4 && nrOfCards >= 1) {
    class_name = "short";
  } else if (nrOfCards <= 6 && nrOfCards >= 4) {
    class_name = "medium";
  } else {
    class_name = "long";
  }

  return (
    <>
      <PageTitle>Titel</PageTitle>
      <Text>
        Introtext uitleg dat dit overzichtspagina is met uitgelichte verhalen en
        dat de rest van de tips en routes via het navigatiemenu te vinden zijn.
      </Text>
      <S.PageContainer className={class_name}>
        {data.map((card) =>
          selectedCountries.length === 0
            ? card?.stories?.map(
                (story, storyIndex) =>
                  story.category === "card" && (
                    <Cards
                      key={storyIndex}
                      title={story.title}
                      location={story.location}
                      text={story.text}
                      image={story.image}
                      alt={story.alt}
                      onClick={story.onClick}
                    />
                  )
              )
            : // Below is needed for the dropdown selection
              selectedCountries.includes(card.location) &&
              card?.stories?.map(
                (story, storyIndex) =>
                  story.category === "card" && (
                    <Cards
                      key={storyIndex}
                      title={story.title}
                      location={story.location}
                      text={story.text}
                      image={story.image}
                      alt={story.alt}
                      onClick={story.onClick}
                    />
                  )
              )
        )}
      </S.PageContainer>
    </>
  );
}
