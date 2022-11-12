import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading: false,
    dataList: [],
}



export const listOfGame = createAsyncThunk('gameList/listOfGame', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
            headers: {
                'X-RapidAPI-Key': '41e3ef3027msh868ecd9c1c07686p14d5eejsna62617d295f4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        return { data }
    } catch (error) {
        return rejectWithValue({

        })
    }
})


const getGameListDataSlice = createSlice({
    name: 'gameList',
    initialState,
    extraReducers: {
        [listOfGame.pending]: (state, action) => {
            state.isLoading = true
        },
        [listOfGame.fulfilled]: (state, action) => {
            state.isLoading = false
            state.dataList = action.payload.data
        },
        [listOfGame.rejected]: (state, action) => {
            state.isLoading = false
        }

    }
})

export default getGameListDataSlice.reducer 