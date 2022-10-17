import { createSlice } from "@reduxjs/toolkit";

const loader = createSlice({
    name: 'loader',
    initialState: {
        load: true,
    },
    reducers: {
        setLoader(state, action){
            state.load = action.payload
        }
    }
})

export default loader.reducer

export const { setLoader } = loader.actions