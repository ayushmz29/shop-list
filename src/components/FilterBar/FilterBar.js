import React, { useState } from "react";
import styled from "styled-components";

// redux imports
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { listSliceActions } from "../../store/list-slice";

const FilterWrapper = styled.div`
  width: 40%;
  margin: 1em;
  background-color: whitesmoke;
  border-radius: 8px;
  /* padding: 0.5em 0.8em; */
  padding: 1em;

  .filter-form {
    display: flex;
    flex-direction: column;
  }

  input,
  label,
  select {
    padding: 0.3em 0;
  }

  .button-grp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1em;
  }
`;

const FilterBar = () => {
  const [filterInput, setFilterInput] = useState({
    area: "",
    category: "",
    status: "",
  });

  const filterInputHandler = (event) => {
    const { name, value } = event.target;
    setFilterInput({
      ...filterInput,
      [name]: value,
    });
  };

  const filterShopsHandler = () => {
    console.log(filterInput);
    dispatch(listSliceActions.filterShop(filterInput));
  };

  const dispatch = useDispatch();

  const closeAddNewShopHandler = () => {
    dispatch(uiActions.toggleFilterMenu());
  };

  return (
    <FilterWrapper>
      <h2>Filter Shops By: </h2>
      <form className="filter-form">
        <label htmlFor="filter-area-name">Select Area Name</label>
        <select
          id="filter-area-name"
          value={filterInput.area}
          name="area"
          onChange={filterInputHandler}
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
          value={filterInput.category}
          name="category"
          onChange={filterInputHandler}
        >
          <option value=""></option>
          <option value="Grocery">Grocery</option>
          <option value="Butcher">Butcher</option>
          <option value="Baker">Baker</option>
          <option value="Chemist">Chemist</option>
          <option value="Stationery-Shop">Stationery Shop</option>
        </select>

        <label htmlFor="shop-status">Shop Open/Close Status</label>
        <select
          id="shop-status"
          value={filterInput.status}
          name="status"
          onChange={filterInputHandler}
        >
          <option value=""></option>
          <option value="Open">Open</option>
          <option value="Close">Close</option>
        </select>
      </form>
      <div className="button-grp">
        <button type="submit" onClick={filterShopsHandler}>
          Filter Shops
        </button>
        <button type="button" onClick={closeAddNewShopHandler}>
          Close
        </button>
      </div>
    </FilterWrapper>
  );
};

export default FilterBar;
