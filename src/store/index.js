
import { configureStore } from '@reduxjs/toolkit';
import loadingReducer  from './loading';

const store = configureStore(
    {
        reducer: {
          loadingReducer:  loadingReducer          
        }
    });   


export default store;

