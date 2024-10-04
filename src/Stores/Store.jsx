import {configureStore} from "@reduxjs/toolkit"
import Sidebarslices from "./Slices/Sidebarslices"

const store= configureStore({
    reducer:{
        sidebar:Sidebarslices,
    }
})

export default store;