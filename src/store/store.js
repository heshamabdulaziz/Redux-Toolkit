import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './Counterslic';
const store = configureStore({
    reducer:{
   counter:counterSlice,
    },
  
  
  })
  
  export default store;