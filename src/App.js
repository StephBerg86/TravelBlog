import React, { useState, createContext } from "react";
import * as S from "./styles.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./Components/NavBar/index.js";
import Landen from "./Pages/Landen/index.js";
import RouteOverview from "./Pages/Route/index.js";
import StoryOverview from "./Pages/Stories/index";
import StoryPage from "./Pages/Stories/StoryPage.js";
import Videos from "./Pages/Reisvideos/index.js";
import Footer from "./Components/Footer/index.js";
import RoutePage from "./Pages/Route/RoutePage.js";

export const AppContext = createContext();

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

  const [selectedCountries, setSelectedCountries] = useState([]);
  const appContext = { selectedCountries, setSelectedCountries };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={appContext}>
          <S.Background>
            <S.PageContainer className="PageContainer">
              <NavBar />
              <S.ContentContainer>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/landen" element={<Landen />}></Route>
                  <Route path="/route" element={<RouteOverview />}></Route>
                  <Route path="/route/:country" element={<RoutePage />}></Route>
                  <Route path="/stories" element={<StoryOverview />}></Route>
                  <Route
                    path="/stories/:country"
                    element={<StoryPage />}
                  ></Route>
                  <Route path="/videos" element={<Videos />}></Route>
                </Routes>
              </S.ContentContainer>
              <Footer />
            </S.PageContainer>
          </S.Background>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
