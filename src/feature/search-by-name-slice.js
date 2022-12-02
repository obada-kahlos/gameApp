import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    searchIsLoading: false,
    searchData: null,
}

export const gameBySearch = createAsyncThunk('search/gameBySearch', async (word, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ word }`,
            {
                headers: {
                    'X-RapidAPI-Key': '41e3ef3027msh868ecd9c1c07686p14d5eejsna62617d295f4',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            })
        return { data }
    } catch (error) {
        return rejectWithValue(error)
    }
})

const GameBySearchSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        resetDataSearch: () => initialState,
    },
    extraReducers: {
        [gameBySearch.pending]: (state, action) => {
            state.searchIsLoading = true
        },
        [gameBySearch.fulfilled]: (state, action) => {
            state.searchIsLoading = false
            state.searchData = action.payload.data;
        },
        [gameBySearch.rejected]: (state, action) => {
            state.searchIsLoading = false
        }
    }
})

export default GameBySearchSlice.reducer
export const { resetDataSearch } = GameBySearchSlice.actions