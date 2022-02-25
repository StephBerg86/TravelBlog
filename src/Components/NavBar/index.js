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
        <S.Link to="/routes">
          <S.NavText>Routes</S.NavText>
        </S.Link>
        <S.Link to="/tips">
          <S.NavText>Tips</S.NavText>
        </S.Link>
        <S.Link to="/videos">
          <S.NavText>Reisvideos</S.NavText>
        </S.Link>
      </div>
      {/* <div>Icons</div> */}
    </S.Container>
  );
}
