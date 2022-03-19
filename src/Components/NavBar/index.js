import React from "react";

import * as S from "./styles";

export default function NavBar() {
  return (
    <S.Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <S.Link to="/">
          <S.Logo>Stephanie Bergman</S.Logo>
        </S.Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <S.Link to="/landen">
          <S.NavText>Landen</S.NavText>
        </S.Link>
        <S.Link to="/route">
          <S.NavText>Routes</S.NavText>
        </S.Link>
        <S.Link to="/stories">
          <S.NavText>Verhalen</S.NavText>
        </S.Link>
        <S.Link to="/videos">
          <S.NavText>Reisvideos</S.NavText>
        </S.Link>
      </div>
    </S.Container>
  );
}
