import React from "react";
import * as S from "./styles";

export default function NavBar() {
  return (
    <S.Container>
      <div>LOGO</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <S.NavText>HOME</S.NavText>
        <S.NavText>LANDEN</S.NavText>
        <S.NavText>TIPS</S.NavText>
        <S.NavText>REISVIDEOS</S.NavText>
      </div>
      <div>ICONS</div>
    </S.Container>
  );
}
