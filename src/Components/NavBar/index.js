import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as S from "./styles";
import Dropdown from "../Dropdown";

export default function NavBar() {
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

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
        {/* <S.Link to="/landen">
          <S.NavText>Landen</S.NavText>
        </S.Link>
        <S.Link to="/route">
          <S.NavText>Routes</S.NavText>
        </S.Link>
        <S.Link to="/stories">
          <S.NavText>Verhalen</S.NavText>
        </S.Link> */}
        <Dropdown />

        <S.Link to="/videos">
          <S.NavText>Reisvideos</S.NavText>
        </S.Link>
      </div>
    </S.Container>
  );
}
