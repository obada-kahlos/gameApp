import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoadingNowPlaying: false,
    moviesNowPlayingData: [],
}


export const NowPlaying = createAsyncThunk('playing/NowPlaying', async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.post(`http://51.75.52.119/~mymovies/public/api/movies?type=now_playing&page=${page}`)
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})

const moviesNowPlayingSlice = createSlice({
    name: 'playing',
    initialState,
    reducers: {
        resetNowPlaying: () => initialState,
    },
    extraReducers: {
        [NowPlaying.pending]: (state, action) => {
            state.isLoadingNowPlaying = true
        },
        [NowPlaying.fulfilled]: (state, action) => {
            state.isLoadingNowPlaying = false
            state.moviesNowPlayingData = action.payload.data.data.movies.data
        },
        [NowPlaying.rejected]: (state, action) => {
            state.isLoadingNowPlaying = false
        }
    }
})
export const  { resetNowPlaying }  = moviesNowPlayingSlice.actions
export default moviesNowPlayingSlice.reducer 