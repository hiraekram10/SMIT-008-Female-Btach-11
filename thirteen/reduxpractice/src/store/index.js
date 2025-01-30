import { configureStore } from "@reduxjs/toolkit";
import cahDeposite from "./reducers/BankReducer";
import counterSlice from './reducers/counterSlice'
import { productsApi } from "./reducers/rtk-query";



const store = configureStore({
   reducer:{
      counter:counterSlice,
    [productsApi.reducerPath] :productsApi.reducer

   },
   middleware: (getDefaultMiddleware) =>(
      getDefaultMiddleware().concat(productsApi.middleware))
   
})


export default store