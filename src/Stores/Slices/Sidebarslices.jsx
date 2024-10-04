import { createSlice } from "@reduxjs/toolkit";

const Sidebarslices = createSlice({
    name: "sidebar",
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleSidebar(state,action){
            state.isOpen =!state.isOpen;
            
        }
    }
})
export default Sidebarslices.reducer
export const {toggleSidebar} = Sidebarslices.actions