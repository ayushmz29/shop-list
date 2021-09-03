import React from "react";
import { ShopWrapper } from "./ShopItems.elements";

// redux imports
import { useDispatch } from "react-redux";
import { listSliceActions } from "../../store/list-slice";

const ShopItem = (props) => {
  const { id, shopName, area, category, openingDate, closingDate } = props.item;
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(listSliceActions.removeItemFromCart(id));
  };

  return (
    <ShopWrapper>
      <h2>Shope Name : {shopName}</h2>
      Shop Area : {area} <br />
      Shop Category : {category} <br />
      Opening Date : {openingDate} <br />
      Closing Date : {closingDate} <br />
      <button type="button" onClick={deleteItemHandler}>
        Delete Shop
      </button>
    </ShopWrapper>
  );
};

export default ShopItem;
