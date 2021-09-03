import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import { ListWrapper } from "./ShopList.elements";

// redux imports
import { useSelector } from "react-redux";

/* const DUMMY_LIST = [
  {
    id: Math.random(),
    shopName: "Shop1",
    area: "Area1",
    category: "Bakery",
    openingDate: "oDATE1",
    closingDate: "cDATE1",
  },
  {
    id: Math.random(),
    shopName: "Shop2",
    area: "Area2",
    category: "Grocery",
    openingDate: "oDATE2",
    closingDate: "cDATE2",
  },
  {
    id: Math.random(),
    shopName: "Shop3",
    area: "Area2",
    category: "Chemist",
    openingDate: "oDATE3",
    closingDate: "cDATE3",
  },
]; */
const ShopList = () => {
  const shopList = useSelector((state) => state.shopList.items);

  return (
    <ListWrapper>
      <h2>List Of Shops</h2>
      {shopList.map((item) => (
        <ShopItem
          key={item.id}
          item={{
            id: item.id,
            shopName: item.shopName,
            area: item.area,
            category: item.category,
            openingDate: item.openingDate,
            closingDate: item.closingDate,
          }}
        />
      ))}
    </ListWrapper>
  );
};

export default ShopList;
