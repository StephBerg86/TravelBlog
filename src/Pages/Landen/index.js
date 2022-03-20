import React from "react";
import { PageTitle, Text } from "../../Constants/OverallStyles";
import * as S from "./styles";
import Cards from "../../Components/Cards";
import { data } from "../../Components/Data";

export default function Landen() {
  return (
    <S.PageContainer>
      <PageTitle style={{ marginBottom: "16px" }}>Landen</PageTitle>
      <Text>
        Hieronder vind je een overzicht van de landen waar ik ben geweest en
        waar ik tips voor heb. Klik op het land om meer te lezen over wat ik
        daar allemaal gedaan heb.
      </Text>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map(
          (country, index) =>
            country.continent === "Afrika" && (
              <Cards
                key={index}
                image={country.image}
                location={country.location}
                onClick={""}
                widthCard={"8.4vw"}
                heightCard={"9vh"}
                paddingText={"8px"}
                heightImage={"60"}
                alt={"land1"}
                marginCard={"8px"}
              />
            )
        )}

        {data.map(
          (country, index) =>
            country.continent === "Azie" && (
              <Cards
                key={index}
                image={country.image}
                location={country.location}
                onClick={""}
                widthCard={"8.4vw"}
                heightCard={"9vh"}
                paddingText={"8px"}
                heightImage={"60"}
                alt={"land1"}
                marginCard={"8px"}
              />
            )
        )}

        {data.map(
          (country, index) =>
            country.continent === "USA" && (
              <Cards
                key={index}
                image={country.image}
                location={country.location}
                onClick={""}
                widthCard={"8.4vw"}
                heightCard={"9vh"}
                paddingText={"8px"}
                heightImage={"60"}
                alt={"land1"}
                marginCard={"8px"}
              />
            )
        )}

        {data.map(
          (country, index) =>
            country.continent === "Midden Amerika" && (
              <Cards
                key={index}
                image={country.image}
                location={country.location}
                onClick={""}
                widthCard={"8.4vw"}
                heightCard={"9vh"}
                paddingText={"8px"}
                heightImage={"60"}
                alt={"land1"}
                marginCard={"8px"}
              />
            )
        )}

        {data.map(
          (country, index) =>
            country.continent === "Zuid Amerika" && (
              <Cards
                key={index}
                image={country.image}
                location={country.location}
                onClick={""}
                widthCard={"8.4vw"}
                heightCard={"9vh"}
                paddingText={"8px"}
                heightImage={"60"}
                alt={"land1"}
                marginCard={"8px"}
              />
            )
        )}

        {data.map(
          (country, index) =>
            country.continent === "Europa" && (
              <Cards
                key={index}
                image={country.image}
                location={country.location}
                onClick={""}
                widthCard={"8.4vw"}
                heightCard={"9vh"}
                paddingText={"8px"}
                heightImage={"60"}
                alt={"land1"}
                marginCard={"8px"}
              />
            )
        )}

        {data.map(
          (country, index) =>
            country.continent === "Oceanie" && (
              <Cards
                key={index}
                image={country.image}
                location={country.location}
                onClick={""}
                widthCard={"8.4vw"}
                heightCard={"9vh"}
                paddingText={"8px"}
                heightImage={"60"}
                alt={"land1"}
                marginCard={"8px"}
              />
            )
        )}
      </div>
    </S.PageContainer>
  );
}
