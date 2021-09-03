import { createSlice } from "@reduxjs/toolkit";

const listInitialState = { items: [] };

const listSlice = createSlice({
  name: "shop-list",
  initialState: listInitialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          shopName: newItem.shopName,
          area: newItem.area,
          category: newItem.category,
          openingDate: newItem.openingDate,
          closingDate: newItem.closingDate,
        });
      }
    },

    removeItemFromCart(state, action) {
      const payloadId = action.payload;
      // console.log(payloadId);
      const existingItem = state.items.find((item) => item.id === payloadId);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== payloadId);
      }
    },

    filterShop(state, action) {
      // console.log(action.payload);
      const { area, category, status } = action.payload;
      const currentDate = new Date().toISOString().slice(0, 10);
      let showShop = false;
      if(status === "Open"){
        showShop = true;
      }
      state.items = state.items
        .filter((item) => item.area === area)
        .filter((item) => item.category === category)
        .filter(
          (item) =>
            item.openingDate < currentDate && item.closingDate > currentDate && showShop === true
        );
    },
  },
});

export const listSliceActions = listSlice.actions;

export default listSlice;
