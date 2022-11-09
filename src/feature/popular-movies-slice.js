import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    isLoading: false,
    popularMoviesData: [],
}


export const popularMovies = createAsyncThunk('popular/popularMovies', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.post(`http://51.75.52.119/~mymovies/public/api/movies?type=popular`)
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})

const popularMoviesSlice = createSlice({
    name: 'popular',
    initialState,
    extraReducers: {
        [popularMovies.pending]: (state, action) => {
            state.isLoading = true
        },
        [popularMovies.fulfilled]: (state, action) => {
            state.isLoading = false
            state.popularMoviesData = action.payload.data.data.movies.data
        },
        [popularMovies.rejected]: (state, action) => {
            state.isLoading = false
        }
    }
})

export default popularMoviesSlice.reducer 