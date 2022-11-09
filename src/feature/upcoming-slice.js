import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    isLoading : false,
    upcoming : [],
}


export const upcomingMovies = createAsyncThunk('upcoming/upcomingMovies' , async (_ , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.post(`http://51.75.52.119/~mymovies/public/api/movies?type=upcoming`)
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})

const upcomingSlice = createSlice({
    name : 'upcoming',
    initialState,
    extraReducers:{
        [upcomingMovies.pending]: (state , action)=>{
            state.isLoading = true
        },
        [upcomingMovies.fulfilled]: (state , action)=>{
            state.isLoading = false
            state.upcoming = action.payload.data.data.movies.data
        },
        [upcomingMovies.rejected]: (state ,action)=>{
            state.isLoading = false
        }
    }
})

export default upcomingSlice.reducer 