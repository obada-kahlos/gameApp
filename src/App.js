import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, } from "react-router-dom";
import Login from "./component/login/login";
import MainPage from "./page/main-page/main-page";
import SignUp from "./component/signup/signup";

import Register from "./page/register/register";
import GameByTag from "./page/game-by-tag/game-by-tag";
import Layout from "./page/layout/layout";
import FavoriteMovies from "./page/favorite-movies/favorite-movies";
import PageNotFound from "./page/page-not-found/page-not-found";
import Info from "./page/Info/Info";
import Pricing from "./page/pricing/pricing";
import ScrollToTop from "./component/shared/ScrollToTop/ScrollToTop";




function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<MainPage />} />
            <Route path='tag' element={<GameByTag />} />
            <Route path='favorite-movies' element={<FavoriteMovies />} />
            <Route path="info:id" element={<Info />} />
            <Route path="pricing" element={<Pricing />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
