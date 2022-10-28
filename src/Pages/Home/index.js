import React, { useContext } from "react";
import Cards from "../../Components/Cards";
import { data } from "../../DataReisverhalen";
import { PageTitle, Text } from "../../Constants/OverallStyles";
import { AppContext } from "../../App";
import Masonry from "react-responsive-masonry";

export default function Home() {
  const appContext = useContext(AppContext);
  const { selectedCountries } = appContext;

  return (
    <>
      <PageTitle>Reisblog</PageTitle>
      <Text>
        Hi! Ik ben Stephanie en met deze site wil ik mensen inspireren en
        informeren over de bestemmingen waar ik ben geweest. Hieronder vind je
        een overzicht van al mijn reisverhalen. Rechtsboven kun je één of
        meerdere landen selecteren, zodat je alleen de verhalen ziet die jij
        interessant vindt. Ook kun je via de link rechtsboven al mijn
        reisvideo's bekijken. <br />
        Deze site is nog niet af maar je kunt er nu vast even rondkijken.
      </Text>
      <Masonry columnsCount={3} gutter="24px">
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
      </Masonry>
    </>
  );
}
