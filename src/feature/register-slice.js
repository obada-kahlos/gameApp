import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading : false,
    error : false,
    status : null,
    loginError : null,
    signUpError : null,
    token : null,
    userData : null,
}

export const signUp = createAsyncThunk('register/signUp' , async (values, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    const formData = new FormData()
    formData.append('email' , values.email)
    formData.append('password' , values.password)
    formData.append('name' , values.username)
    try {   
        const res = await axios.post('http://51.75.52.119/~mymovies/public/api/register' , formData, {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const login = createAsyncThunk('register/login' , async (values, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    const formData = new FormData()
    formData.append('email' , values.email)
    formData.append('password' , values.password)
    try {   
        const res = await axios.post('http://51.75.52.119/~mymovies/public/api/login' , formData, {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})


const registerSlice = createSlice({
    name :'register',
    initialState:initialState,
    reducers: {
        resetRegister: () => initialState,
    },
    extraReducers:{
        [signUp.pending]:(state , action) =>{
            state.isLoading = true
        },
        [signUp.fulfilled]:(state , action) =>{
            state.isLoading = false
            state.status = action.payload.status
            state.signUpError = action.payload.data.message
            state.token = action.payload.data.data.token
            state.userData = action.payload.data.data.user
            console.log(action.payload);
            localStorage.setItem("movies", state.token);
            localStorage.setItem("userData", JSON.stringify(state.userData));
        },
        [signUp.rejected]:(state , action) =>{
            state.isLoading = false
        },

        [login.pending]:(state , action) =>{
            state.isLoading = true
        },
        [login.fulfilled]:(state , action) =>{
            state.isLoading = false
            state.status = action.payload.status
            state.loginError = action.payload.data.message
            console.log(action.payload);
            state.token = action.payload.data.data.token
            state.userData = action.payload.data.data.user
            localStorage.setItem("movies", state.token);    
            localStorage.setItem("userData", JSON.stringify(state.userData));
        },
        [login.rejected]:(state , action) =>{
            state.isLoading = false
        },
    }
})

export const { resetRegister } = registerSlice.actions
export default registerSlice.reducer