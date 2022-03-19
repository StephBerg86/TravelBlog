import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Components/Data";
import Route from "../../Components/Route";

export default function RoutePage() {
  let { country } = useParams();
  console.log("country", country);

  const currentCountry = data.find((c) => c.id === country);
  console.log("currentCountr", currentCountry);

  return (
    <>
      {currentCountry.routes.map((route, routeIndex) =>
        route.category === "route" ? (
          <Route
            key={routeIndex}
            title={route.title}
            location={route.location}
            text={route.text}
            image={route.image}
            alt={route.alt}
          />
        ) : (
          ""
        )
      )}
    </>
  );
}
