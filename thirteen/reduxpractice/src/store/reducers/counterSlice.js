import { createSlice } from '@reduxjs/toolkit'

const Initial_state ={
    count: 2,
  }

  const counterSlice = createSlice({
    name:"counter",
    initialState:Initial_state,
    reducers:{
        increment:(state)=>{
     state.count = state.count +1
        },
        decrement:(state)=>{
            state.count-=1
    }
    

    }

  })

  export const {increment,decrement}= counterSlice.actions
  export default counterSlice.reducer