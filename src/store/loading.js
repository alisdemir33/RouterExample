import { createSlice } from '@reduxjs/toolkit';


const initialState = { isLoading: false }

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {       
        setLoading(state,action) {
            state.isLoading = action.payload;
        }        
    }
})

export const loadingActions =loadingSlice.actions; 
export default loadingSlice.reducer;