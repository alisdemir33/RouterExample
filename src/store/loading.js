import { createSlice } from '@reduxjs/toolkit';


const initialState = { isLoading: false,message:'' }

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {       
        setLoading(state,action) {           
            state.isLoading = action.payload.isLoadingStatus;
            state.message=action.payload.loadingMessage;
        }        
    }
})

export const loadingActions =loadingSlice.actions; 
export default loadingSlice.reducer;