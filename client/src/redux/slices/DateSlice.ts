import { createSlice,  } from '@reduxjs/toolkit'
import { currentDate, currentTime, dateSlicer } from '../../utils'
import type { RootState } from '../store'

// Define the initial state using that type
const initialState: any = {
   today: '',
   tommarow:'',
   two_days:'',
   time:''
}

let fetchData:any = []
let errorHandle:any = ''


export const dateSlice = createSlice({
  name: 'date',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    GET_DATE: (state:any) => {
        console.log(`MOUNTED DATE : ${state.time}`);
        state.today =  dateSlicer(currentDate());
        state.tommarow =   dateSlicer(currentDate(1));
        state.two_days =  dateSlicer(currentDate(2));  
        
    },
    GET_TIME: (state:any) => {
      state.time = currentTime();
     console.log(`Time : ${state.time}`);
  },
  },
  
})

export const { GET_DATE, GET_TIME } = dateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWeather = (state: RootState) => state

export default dateSlice.reducer