import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoadingPlatform: false,
    platformData: [],
}

export const platform = createAsyncThunk('gamesByPlatform/platform', async (platform, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`,
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


const GamesByPlatformSlice = createSlice({
    name: 'gamesByPlatform',
    initialState,
    extraReducers: {
        [platform.pending]: (state, action) => {
            state.isLoadingPlatform = true
        },
        [platform.fulfilled]: (state, action) => {
            state.isLoadingPlatform = false
            state.platformData = action.payload.data
        },
        [platform.rejected]: (state, action) => {
            state.isLoadingPlatform = false
        }

    }
})

export default GamesByPlatformSlice.reducer 