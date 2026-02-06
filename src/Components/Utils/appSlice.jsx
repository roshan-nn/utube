import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "roshan",
    initialState: {                           // initialising state
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {                       //passing state inside function 
            state.isMenuOpen = !state.isMenuOpen;   
        },
    },

});

export const {toggleMenu} = appSlice.actions; 
export default appSlice.reducer;