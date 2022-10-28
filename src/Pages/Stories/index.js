import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../DataReisverhalen";
import Story from "../../Components/Story";

export default function StoryPage() {
  let { country, city } = useParams();

  const currentCountry = data.find((c) => c.id === country);

  return (
    <>
      {currentCountry.stories.map((story, storyIndex) =>
        city
          ? story.id === city &&
            story.category === "story" && (
              <Story key={storyIndex} data={story} />
            )
          : story.category === "story" && (
              <Story key={storyIndex} data={story} />
            )
      )}
    </>
  );
}
