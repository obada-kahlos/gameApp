import { configureStore } from "@reduxjs/toolkit";
import register from '../feature/register-slice'
import getDataSlice from '../feature/genres-slice'
import popularMovies from '../feature/popular-movies-slice'
import upcomingSlice from '../feature/upcoming-slice' 
import moviesNowPlayingSlice from '../feature/movies-now-playing-slice'
import getMoviesInfoSlice from '../feature/get-movies-info-slice'

//// Game Api
import getGameListDataSlice from '../feature/game-list-slice'
import gamesByPlatformSlice from '../feature/games-by-platform-slice'

export default configureStore({
    reducer: {
        register,
        getDataSlice,
        popularMovies,
        upcoming: upcomingSlice,
        nowPlaying : moviesNowPlayingSlice,
        getMoviesInfo : getMoviesInfoSlice,
        gameList: getGameListDataSlice,
        platforms : gamesByPlatformSlice,
    }
})