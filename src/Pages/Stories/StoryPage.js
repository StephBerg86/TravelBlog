import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Components/Data";
import Story from "../../Components/Story";

export default function StoryPage() {
  let { country } = useParams();

  const currentCountry = data.find((c) => c.id === country);

  return (
    <>
      {currentCountry.stories.map((story, storyIndex) =>
        story.category === "story" ? (
          <Story
            key={storyIndex}
            title={story.title}
            location={story.location}
            text={story.text}
            image={story.image}
            alt={story.alt}
          />
        ) : (
          ""
        )
      )}
    </>
  );
}
