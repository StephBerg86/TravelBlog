import * as S from "./styles";
import Dropdown from "../Dropdown";

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
        <Dropdown />
        <S.Link to="/videos">
          <S.NavText>Reisvideos</S.NavText>
        </S.Link>
        <S.Link to="/overmij">
          <S.NavText>Over mij</S.NavText>
        </S.Link>
      </div>
    </S.Container>
  );
}
