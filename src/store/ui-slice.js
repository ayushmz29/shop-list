import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  addNewShopVisible: false,
  filterMenuVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleAddNewShop(state) {
      state.addNewShopVisible = !state.addNewShopVisible;
    },

    toggleFilterMenu(state) {
      state.filterMenuVisible = !state.filterMenuVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
