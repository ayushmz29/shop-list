import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import listSlice from "./list-slice";

const store = configureStore({
  // main reducer
  reducer: { ui: uiSlice.reducer, shopList: listSlice.reducer }
});

export default store;