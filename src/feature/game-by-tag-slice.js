import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading: false,
    gameByTagData: [],
}

export const gameByTag = createAsyncThunk('ByTag/gameByTag', async (tag, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${tag}`,
        {
            headers: {
                'X-RapidAPI-Key': '41e3ef3027msh868ecd9c1c07686p14d5eejsna62617d295f4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }
        })
        console.log(res);
        return res
    } catch (error) {
        return rejectWithValue({

        })
    }
})


const GamesByTagSlice = createSlice({
    name: 'ByTag',
    initialState,
    extraReducers: {
        [gameByTag.pending]: (state, action) => {
            state.isLoading = true
        },
        [gameByTag.fulfilled]: (state, action) => {
            state.isLoading = false
            state.gameByTagData = action.payload.data
        },
        [gameByTag.rejected]: (state, action) => {
            state.isLoading = false
        }

    }
})

export default GamesByTagSlice.reducer 