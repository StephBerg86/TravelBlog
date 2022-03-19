import React from "react";
import * as S from "./styles.js";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./Pages/StartScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./Components/NavBar/index.js";
import Landen from "./Pages/Landen/index.js";
import RoutePagina from "./Pages/Route/index.js";
import Stories from "./Pages/Stories/index.js";
import Videos from "./Pages/Reisvideos/index.js";
import Cenotes from "./Pages/Landen/Mexico/Cenotes";
import Footer from "./Components/Footer/index.js";
import TipVarkens from "./Pages/Landen/Bahamas/TipVarkens.js";
import Formentera from "./Pages/Landen/Spanje/Formentera.js";
import Ibiza from "./Pages/Landen/Spanje/Ibiza.js";
import RouteSriLanka from "./Pages/Landen/SriLanka/RouteSriLanka.js";

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
                <Route path="/landen" element={<Landen />}></Route>
                <Route path="/mexicocenotes" element={<Cenotes />}></Route>
                <Route path="/ijsland" element={<Cenotes />}></Route>
                <Route path="/bahamasvarkens" element={<TipVarkens />}></Route>
                <Route path="/japan" element={<Cenotes />}></Route>
                <Route path="/philipijnen" element={<Cenotes />}></Route>
                <Route path="/namibie" element={<Cenotes />}></Route>
                <Route path="/zuidafrika" element={<Cenotes />}></Route>
                <Route path="/miami" element={<Cenotes />}></Route>
                <Route path="/formentera" element={<Formentera />}></Route>
                <Route path="/ibiza" element={<Ibiza />}></Route>
                <Route
                  path="/routesrilanka"
                  element={<RouteSriLanka />}
                ></Route>

                <Route path="/routes" element={<RoutePagina />}></Route>
                <Route path="/stories" element={<Stories />}></Route>
                <Route path="/videos" element={<Videos />}></Route>
              </Routes>
            </div>
            <Footer />
          </S.PageContainer>
        </S.Background>
      </ThemeProvider>
    </div>
  );
}

export default App;
