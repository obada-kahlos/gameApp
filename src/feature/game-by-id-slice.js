import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading: false,
    data: null,
}

export const gameById = createAsyncThunk('id/gameById', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ id }`,
            {
                headers: {
                    'X-RapidAPI-Key': '41e3ef3027msh868ecd9c1c07686p14d5eejsna62617d295f4',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            })
        console.log(res);
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})

const GameByIdSlice = createSlice({
    name: 'id',
    initialState,
    extraReducers: {
        [gameById.pending]: (state, action) => {
            state.isLoading = true
        },
        [gameById.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload.data;
        },
        [gameById.rejected]: (state, action) => {
            state.isLoading = false
        }
    }
})

export default GameByIdSlice.reducer 