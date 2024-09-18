import { configureStore } from "@reduxjs/toolkit";
import MenuOpenSliceReducer from "./slices/mobileMenu";

const store = configureStore({
  reducer: {
    MenuOpenSlice: MenuOpenSliceReducer,
  },
});

export default store;
