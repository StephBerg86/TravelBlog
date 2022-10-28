import React, { useState, createContext } from "react";
import * as S from "./styles.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./Components/NavBar/index.js";
import StoryPage from "./Pages/Stories/index.js";
import Videos from "./Pages/Reisvideos/index.js";
import Footer from "./Components/Footer/index.js";
import RoutePage from "./Pages/Route/index.js";
import About from "./Pages/Overmij/About.js";
import { data } from "./DataReisverhalen/index.js";

export const AppContext = createContext();

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

  const [selectedCountries, setSelectedCountries] = useState([]);

  let newDataArray = data.filter((ele) => {
    if (selectedCountries.includes(ele.location)) {
      return ele;
    }
    return null;
  });

  let nrOfCards = newDataArray.reduce((res, ele) => {
    let num = ele.stories.reduce(
      (r, e) => (e.category === "card" ? r + 1 : r),
      0
    );
    return res + num;
  }, 0);

  const appContext = {
    selectedCountries,
    setSelectedCountries,
    nrOfCards,
  };

  return (
    <S.Background>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={appContext}>
          <S.PageContainer className="PageContainer">
            <NavBar />
            <S.ContentContainer>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/route/:country" element={<RoutePage />}></Route>
                <Route path="/story/:country" element={<StoryPage />}></Route>
                <Route
                  path="/story/:country/:city"
                  element={<StoryPage />}
                ></Route>
                <Route path="/videos" element={<Videos />}></Route>
                <Route path="/overmij" element={<About />}></Route>
              </Routes>
            </S.ContentContainer>
            <Footer />
          </S.PageContainer>
        </AppContext.Provider>
      </ThemeProvider>
    </S.Background>
  );
}

export default App;
