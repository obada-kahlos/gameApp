import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading : false,
    moviesTypeData : [],
}



export const moviesType = createAsyncThunk('getData/moviesType' , async(_ , thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.get('http://51.75.52.119/~mymovies/public/api/genres')
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})




const getDataSlice = createSlice({
    name : 'getData',
    initialState,
    extraReducers:{
        [moviesType.pending]: (state , action)=>{
            state.isLoading = true
        },
        [moviesType.fulfilled]: (state , action)=>{
            state.isLoading = false
            state.moviesTypeData = action.payload.data.data
        },
        [moviesType.rejected]: (state ,action)=>{
            state.isLoading = false
        }

    }
})

export default getDataSlice.reducer 