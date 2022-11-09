import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading : false,
    moviesImageData : [],
    movieActorsData : [],
}



export const movieImage = createAsyncThunk('getMoviesData/movieImage' , async(params , thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.get(`http://51.75.52.119/~mymovies/public/api/movie/${params}/images`)
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const movieActors = createAsyncThunk('getMoviesData/movieActors' , async(params , thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.get(`http://51.75.52.119/~mymovies/public/api/movie/${params}/actors`)
        console.log(res);
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})


const getMoviesInfoSlice = createSlice({
    name : 'getMoviesData',
    initialState,
    extraReducers:{
        [movieImage.pending]: (state , action)=>{
            state.isLoading = true
        },
        [movieImage.fulfilled]: (state , action)=>{
            state.isLoading = false
            state.moviesImage = action.payload.data.data
        },
        [movieImage.rejected]: (state ,action)=>{
            state.isLoading = false
        },


        [movieActors.pending]: (state , action)=>{
            state.isLoading = true
        },
        [movieActors.fulfilled]: (state , action)=>{
            state.isLoading = false
            state.movieActorsData = action.payload.data.data
        },
        [movieActors.rejected]: (state ,action)=>{
            state.isLoading = false
        },

    }
})

export default getMoviesInfoSlice.reducer 