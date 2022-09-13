import React, { useContext } from "react";
import Cards from "../../Components/Cards";

import * as S from "./styles";
import { data } from "../../Components/DataReisverhalen";
import { PageTitle, Text } from "../../Constants/OverallStyles";
import { AppContext } from "../../App";

export default function Home() {
  const appContext = useContext(AppContext);
  const { selectedCountries, nrOfCards } = appContext;

  let class_name;
  if (nrOfCards < 4 && nrOfCards >= 1) {
    class_name = "a";
  } else if (nrOfCards <= 6 && nrOfCards >= 4) {
    class_name = "b";
  } else if (nrOfCards <= 9 && nrOfCards >= 6) {
    class_name = "c";
  } else if (nrOfCards <= 12 && nrOfCards >= 9) {
    class_name = "d";
  } else if (nrOfCards <= 15 && nrOfCards >= 12) {
    class_name = "e";
  } else if (nrOfCards <= 18 && nrOfCards >= 15) {
    class_name = "f";
  } else if (nrOfCards <= 24 && nrOfCards >= 21) {
    class_name = "g";
  } else if (nrOfCards <= 27 && nrOfCards >= 24) {
    class_name = "h";
  } else if (nrOfCards <= 30 && nrOfCards >= 27) {
    class_name = "i";
  } else if (nrOfCards <= 33 && nrOfCards >= 30) {
    class_name = "j";
  } else if (nrOfCards <= 37 && nrOfCards >= 33) {
    class_name = "k";
  } else if (nrOfCards <= 39 && nrOfCards >= 37) {
    class_name = "l";
  } else if (nrOfCards <= 42 && nrOfCards >= 39) {
    class_name = "m";
  } else if (selectedCountries === []) {
    class_name = "verylong";
  } else {
    class_name = "verylong";
  }

  return (
    <>
      <PageTitle>Reisblog</PageTitle>
      <Text>
        Hi! Ik ben Stephanie en met deze site wil ik mensen inspireren en
        informeren over de bestemmingen waar ik ben geweest. Hieronder vind je
        een overzicht van alle reisverhalen. Rechtsboven kun je één of meerdere
        landen selecteren, zodat je alleen de verhalen ziet die jij interessant
        vindt. Ook kun je rechtsboven al mijn reisvideo's bekijken. <br />
        Deze site is nog niet af maar je kunt er nu vast even rondkijken.
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
