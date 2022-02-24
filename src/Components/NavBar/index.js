import React from "react";
import * as S from "./styles";

export default function NavBar() {
  return (
    <S.Container>
      <div>Logo</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <S.NavText>Home</S.NavText>
        <S.NavText>Landen</S.NavText>
        <S.NavText>Tips</S.NavText>
        <S.NavText>Reisvideos</S.NavText>
      </div>
      <div>Icons</div>
    </S.Container>
  );
}
