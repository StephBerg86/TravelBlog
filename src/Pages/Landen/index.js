import React from "react";
import { SubTitle, PageTitle, Text } from "../../Constants/OverallStyles";
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <SubTitle>Afrika</SubTitle>
          <div style={{ display: "flex" }}>
            {data.map(
              (country, index) =>
                country.continent === "Afrika" && (
                  <Cards
                    image={country.image}
                    location={country.location}
                    onClick={""}
                    widthCard={"9vw"}
                    heightImage={"70"}
                    alt={"land1"}
                    marginCard={"4px"}
                  />
                )
            )}
          </div>
        </div>

        <div>
          <SubTitle>Azie</SubTitle>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.map(
              (country, index) =>
                country.continent === "Azie" && (
                  <Cards
                    image={country.image}
                    location={country.location}
                    onClick={""}
                    widthCard={"9vw"}
                    heightImage={"70"}
                    alt={"land1"}
                    marginCard={"4px"}
                  />
                )
            )}
          </div>
        </div>

        <div>
          <SubTitle>Noord Amerika</SubTitle>
          <div style={{ display: "flex" }}>
            {data.map(
              (country, index) =>
                country.continent === "USA" && (
                  <Cards
                    image={country.image}
                    location={country.location}
                    onClick={""}
                    widthCard={"9vw"}
                    heightImage={"70"}
                    alt={"land1"}
                    marginCard={"4px"}
                  />
                )
            )}
          </div>
        </div>

        <div>
          <SubTitle>Midden Amerika</SubTitle>
          <div style={{ display: "flex" }}>
            {data.map(
              (country, index) =>
                country.continent === "Midden Amerika" && (
                  <Cards
                    image={country.image}
                    location={country.location}
                    onClick={""}
                    widthCard={"9vw"}
                    heightImage={"70"}
                    alt={"land1"}
                    marginCard={"4px"}
                  />
                )
            )}
          </div>
        </div>

        <div>
          <SubTitle>Zuid Amerika</SubTitle>
          <div style={{ display: "flex" }}>
            {data.map(
              (country, index) =>
                country.continent === "Zuid Amerika" && (
                  <Cards
                    image={country.image}
                    location={country.location}
                    onClick={""}
                    widthCard={"9vw"}
                    heightImage={"70"}
                    alt={"land1"}
                    marginCard={"4px"}
                  />
                )
            )}
          </div>
        </div>

        <div>
          <SubTitle>Europa</SubTitle>
          <div style={{ display: "flex" }}>
            {data.map(
              (country, index) =>
                country.continent === "Europa" && (
                  <Cards
                    image={country.image}
                    location={country.location}
                    onClick={""}
                    widthCard={"9vw"}
                    heightImage={"70"}
                    alt={"land1"}
                    marginCard={"4px"}
                  />
                )
            )}
          </div>
        </div>

        <div>
          <SubTitle>Oceanië</SubTitle>
          <div style={{ display: "flex" }}>
            {data.map(
              (country, index) =>
                country.continent === "Oceanie" && (
                  <Cards
                    image={country.image}
                    location={country.location}
                    onClick={""}
                    widthCard={"9vw"}
                    heightImage={"70"}
                    alt={"land1"}
                    marginCard={"4px"}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </S.PageContainer>
  );
}
