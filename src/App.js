import { useEffect } from "react";
import { BrowserRouter , Routes, Route, useNavigate, } from "react-router-dom";
import Genres from "./component/genres/genres";
import Login from "./component/login/login";
import Movies from "./component/movies/movies";
import SignUp from "./component/signup/signup";

import Register from "./page/register/register";
import PopularMovies from "./page/popular/popular";
import Layout from "./page/layout/layout";
import FavoriteMovies from "./page/favorite-movies/favorite-movies";
import PageNotFound from "./page/page-not-found/page-not-found";
import Info from "./page/Info/Info";




function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/" element={<Layout /> }>
              <Route path="/" element={<Movies />} />
              <Route path='popular' element={<PopularMovies />} />
              <Route path='favorite-movies' element={<FavoriteMovies />} />
            </Route>

            <Route path=":id" element={<Info />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
