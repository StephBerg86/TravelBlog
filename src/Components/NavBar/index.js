import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <S.Logo>Stephanie Bergman</S.Logo>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/landen">
          <S.NavText>Landen</S.NavText>
        </Link>
        <Link to="/routes">
          <S.NavText>Routes</S.NavText>
        </Link>
        <Link to="/tips">
          <S.NavText>Tips</S.NavText>
        </Link>
        <Link to="/videos">
          <S.NavText>Reisvideos</S.NavText>
        </Link>
      </div>
      {/* <div>Icons</div> */}
    </S.Container>
  );
}
