import React from "react";
import { SubTitle, PageTitle } from "../../Constants/OverallStyles";
import * as S from "./styles";
import HeaderLanden from "./landen.jpg";

export default function Landen() {
  return (
    <S.PageContainer>
      <S.Img src={HeaderLanden} alt="Header Landen" />
      <PageTitle style={{ marginBottom: "16px" }}>Landen</PageTitle>
      <S.CountryContainer>
        <div>
          <SubTitle>Afrika</SubTitle>
          <ul>
            <li>Namibië</li>
            <li>Zanzibar</li>
            <li>Zuid Afrika</li>
          </ul>
          <SubTitle>Azie</SubTitle>
          <ul>
            <li>Cambodja</li>
            <li>China</li>
            <li>Filipijnen</li>
            <li>Indonesië</li>
            <li>Japan</li>
            <li>Laos</li>
            <li>Maleisië</li>
            <li>Sri Lanka</li>
            <li>Thailand</li>
            <li>Vietnam</li>
          </ul>
        </div>
        <div>
          <SubTitle>Noord Amerika</SubTitle>
          <ul>
            <li>New York</li>
            <li>Miami</li>
            <li>Bahamas</li>
          </ul>
          <SubTitle>Midden Amerika</SubTitle>
          <ul>
            <li>Mexico</li>
            <li>Cuba</li>
            <li>Curacao</li>
          </ul>

          <SubTitle>Zuid Amerika</SubTitle>
          <ul>
            <li>Brazilië</li>
          </ul>
        </div>
        <div>
          <SubTitle>Europa</SubTitle>
          <ul>
            <li>Londen</li>
            <li>Ijsland</li>
            <li>Zuid Afrika</li>
            <li>Noorwegen</li>
            <li>Polen</li>
            <li>Spanje</li>
          </ul>
          <SubTitle>Oceanië</SubTitle>
          <ul>
            <li>Australië</li>
          </ul>
        </div>
      </S.CountryContainer>
    </S.PageContainer>
  );
}
