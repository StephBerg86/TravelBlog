import React from "react";
import * as S from "./styles.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./Components/NavBar/index.js";
import Landen from "./Pages/Landen/index.js";
import RouteOverview from "./Pages/Route/index.js";
import Stories from "./Pages/Stories/index.js";
import Videos from "./Pages/Reisvideos/index.js";
import Cenotes from "./Pages/Landen/Mexico/Cenotes";
import Footer from "./Components/Footer/index.js";
import TipVarkens from "./Pages/Landen/Bahamas/TipVarkens.js";
import Formentera from "./Pages/Landen/Spanje/Formentera.js";
import Ibiza from "./Pages/Landen/Spanje/Ibiza.js";
import RouteSriLanka from "./Pages/Landen/SriLanka/RouteSriLanka.js";
import RoutePage from "./Pages/Route/RoutePage.js";

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
                <Route path="/" element={<Home />}></Route>
                <Route path="/landen" element={<Landen />}></Route>
                <Route path="/route" element={<RouteOverview />}></Route>
                <Route path="/route/:country" element={<RoutePage />}></Route>
                <Route path="/stories" element={<Stories />}></Route>
                <Route path="/videos" element={<Videos />}></Route>

                <Route path="/mexicoroute" element={<Cenotes />}></Route>
                <Route path="/mexicostory" element={<Cenotes />}></Route>
                <Route path="/icelandroute" element={<Cenotes />}></Route>
                <Route path="/icelandstory" element={<Cenotes />}></Route>
                <Route path="/bahamasroute" element={<Cenotes />}></Route>
                <Route path="/bahamasstory" element={<TipVarkens />}></Route>
                <Route path="/japanroute" element={<Cenotes />}></Route>
                <Route path="/japanstory" element={<Cenotes />}></Route>
                <Route path="/miamiroute" element={<Cenotes />}></Route>
                <Route path="/formenteraroute" element={<Formentera />}></Route>
                <Route path="/ibizastory" element={<Ibiza />}></Route>
                <Route
                  path="/srilankaroute"
                  element={<RouteSriLanka />}
                ></Route>

                {/* PhilippinesRoute: "/philippinesroute",
  PhilippinesStory: "/philippinesstory",
  NamibiaRoute: "/namibiaroute",
  NamibiaStory: "/namibiastory",
  SouthAfricaRoute: "/southafricaroute",
  SouthAfricaStory: "/southafricastory",
  MiamiStory: "/miamistory",
  FormenteraStory: "/formenterastory",
  IbizaRoute: "/ibizaroute",
  SrilankaStory: "/srilankastory", */}
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
