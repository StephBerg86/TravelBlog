import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Components/Data";
import Route from "../../Components/Route";

export default function RoutePage() {
  let { country } = useParams();

  const currentCountry = data.find((c) => c.id === country);

  return (
    <>
      {currentCountry.stories.map((route, routeIndex) =>
        route.category === "route" ? (
          <Route key={routeIndex} props={route} />
        ) : (
          ""
        )
      )}
    </>
  );
}
