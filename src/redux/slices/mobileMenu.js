import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const MenuOpenSlice = createSlice({
  name: "menuOpen",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.open = !state.open;
    },
    openMenu: (state) => {
      state.open = true;
    },
    closeMenu: (state) => {
      state.open = false;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = MenuOpenSlice.actions;
export default MenuOpenSlice.reducer;
