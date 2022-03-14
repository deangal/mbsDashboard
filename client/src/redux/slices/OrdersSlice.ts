import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import  { MbsState,FetchMbsAction, Order } from '../types'
import axios from 'axios'
import { useDispatch } from 'react-redux'

// Define the initial state using that type
const initialState: MbsState = {
    data: [],
    loading: false,
    error: "",
    toggle:false
}

let fetchData:any = []
let errorHandle:any = ''

export const fetchOrders = createAsyncThunk(
  'mbs/fetch',
  async () => {
    errorHandle = ""
    
    const res:any = await axios.get(`https://mybundles.co.il/wp-json/api/v1/orders`)
    .then(function (response) {
      fetchData = response.data;
    })
    .catch(function (error) {
      if(error.response.status == 400){
        errorHandle = "City Not Found";

      }
    });

  }
)

export const orderSlice = createSlice({
  name: 'order',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    POST_ORDER: (state:any,action:any) => {
        let newState = [...state.data,action.payload]
        state.data = newState
        state.loading = false
        state.error = ''

    },
    PUT_ORDER: (state:any,action:any) => {

        const orderId = action.payload.id
        const putState = [...state.data]
        let putId = putState.findIndex(item => item.id === orderId)
        putState[putId] = action.payload
        
        state.data = putState
        state.loading = false
        state.error = ''
    },
    DELETE_ORDER: (state:any,action:any) => {
        const deleteId = action.payload.id
        const deleteState = [...state.data]
        let deleteIndex = deleteState.findIndex(item => item.id === deleteId)
        
        if(deleteIndex != -1){
            deleteState.splice(deleteIndex,1)
        }           

        state.data = deleteState
        state.loading = false
        state.error = ''
    },
      
    SET_LOADING: (state) => {
      state.loading = true
    },
    SET_ERROR: (state,action) => {
      state.error = action.payload
    },
    TOGGLE: (state) => {
      state.toggle = !state.toggle
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchOrders.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(
      fetchOrders.fulfilled, (state, action:any) => {
          if(errorHandle == ''){
            state.data = fetchData;
            state.loading = false;
            state.error = errorHandle
          } else {
            state.error = errorHandle
          }
         

    });
    builder.addCase(
      fetchOrders.rejected,(state, action:any) => {
          state.error = errorHandle;
          
    });
 }
})

export const { POST_ORDER , PUT_ORDER , DELETE_ORDER , SET_LOADING,SET_ERROR,TOGGLE} = orderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWeather = (state: RootState) => state

export default orderSlice.reducer