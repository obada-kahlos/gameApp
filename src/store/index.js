import { configureStore } from "@reduxjs/toolkit";
import register from '../feature/register-slice'
import getGameListDataSlice from '../feature/game-list-slice'
import gamesByPlatformSlice from '../feature/games-by-platform-slice'
import gameByIdSlice from '../feature/game-by-id-slice'
import gameByTagSlice from '../feature/game-by-tag-slice' 
export default configureStore({
    reducer: {
        register,
        gameList: getGameListDataSlice,
        platforms : gamesByPlatformSlice,
        gameById : gameByIdSlice,
        gameByTag : gameByTagSlice,

    }
})