import React from "react";
import * as S from "./styles.js";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./Pages/StartScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./Components/NavBar/index.js";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <S.Background>
          <S.PageContainer className="PageContainer">
            <NavBar />
            <div style={{ margin: "16px" }}>
              <Routes>
                <Route path="/" element={<StartScreen />}></Route>
                {/* <Route path="/landen" element={}></Route>
            <Route path="/routes" element={}></Route>
            <Route path="/tips" element={}></Route>
            <Route path="/videos" element={}></Route> */}
              </Routes>
            </div>
          </S.PageContainer>
        </S.Background>
      </ThemeProvider>
    </div>
  );
}

export default App;
