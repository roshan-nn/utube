import { configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice"
const store = configureStore({
   reducer: {
    app: appSlice,   // adding appslice into store
   }
})

export default store;