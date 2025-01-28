import { configureStore } from "@reduxjs/toolkit";
import cahDeposite from "./reducers/BankReducer";



const store = configureStore({
   reducer:{
    bank:cahDeposite
   }
})


export default store