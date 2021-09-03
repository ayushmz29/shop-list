import React, { useState } from "react";
import { AddNewShopWrapper } from "./AddNewShop.elements";

// redux imports
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { listSliceActions } from "../../store/list-slice";


const AddNewShop = () => {
  const [inputValues, setInputValues] = useState({
    // id:"",
    shopName: "",
    area: "",
    category: "",
    openingDate: "",
    closingDate: "",
  });

  const formInputHandler = (event) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const closeAddNewShopHandler = () => {
    dispatch(uiActions.toggleAddNewShop());
  };

  const addNewShopHandler = () => {
    if (
      inputValues.shopName === "" ||
      inputValues.area === "" ||
      inputValues.category === "" ||
      inputValues.openingDate === "" ||
      inputValues.closingDate === ""
    ) {
      console.log("error");
      
    } else {
      dispatch(
        listSliceActions.addItemToCart({
          id: Math.random(),
          shopName: inputValues.shopName,
          area: inputValues.area,
          category: inputValues.category,
          openingDate: inputValues.openingDate,
          closingDate: inputValues.closingDate,
        })
      );
      setInputValues({
        shopName: "",
        area: "",
        category: "",
        openingDate: "",
        closingDate: "",
      });
      console.log(inputValues);
    }
  };
  return (
    <AddNewShopWrapper>
      <h2>Add New Shop</h2>
      <form className="form-main">
        <label htmlFor="shop-name">Enter Shop Name</label>
        <input
          id="shop-name"
          type="text"
          name="shopName"
          value={inputValues.shopName}
          onChange={formInputHandler}
        />

        <label htmlFor="area-name">Select Area Name</label>
        <select
          id="area-name"
          name="area"
          value={inputValues.area}
          onChange={formInputHandler}
        >
          <option value=""></option>
          <option value="Thane">Thane</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Suburban">Suburban</option>
          <option value="Nashik">Nashik</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Ahmednagar">Ahmednagar</option>
          <option value="Solapur">Solapur</option>
          <option value="Prayagraj">Prayagraj</option>
        </select>

        <label htmlFor="category-name">Select Shop Category</label>
        <select
          id="category-name"
          name="category"
          value={inputValues.category}
          onChange={formInputHandler}
        >
          <option value=""></option>
          <option value="Grocery">Grocery</option>
          <option value="Butcher">Butcher</option>
          <option value="Baker">Baker</option>
          <option value="Chemist">Chemist</option>
          <option value="Stationery-Shop">Stationery Shop</option>
        </select>

        <label htmlFor="opening-date">Shop Opening Date</label>
        <input
          id="opening-date"
          type="date"
          name="openingDate"
          value={inputValues.openingDate}
          onChange={formInputHandler}
        />

        <label htmlFor="closing-date">Shop Closing Date</label>
        <input
          id="closing-date"
          type="date"
          name="closingDate"
          value={inputValues.closingDate}
          min={inputValues.openingDate}
          onChange={formInputHandler}
        />
      </form>
      <div className="button-grp">
        <button type="submit" onClick={addNewShopHandler}>
          Add Shop
        </button>
        <button type="button" onClick={closeAddNewShopHandler}>
          Close
        </button>
      </div>
    </AddNewShopWrapper>
  );
};

export default AddNewShop;
