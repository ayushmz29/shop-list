import "./App.css";
import styled from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyles";
import ShopList from "./components/ShopList/ShopList";
import AddNewShop from "./components/AddNewShop/AddNewShop";
import FilterBar from "./components/FilterBar/FilterBar";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";

const AppWrapper = styled.div`
  background-color: #253b4d;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  const dispatch = useDispatch();

  const addNewShopIsVisible = useSelector(
    (state) => state.ui.addNewShopVisible
  );

  const filterMenuIsVisible = useSelector(
    (state) => state.ui.filterMenuVisible
  );

  const toggleAddNewShopHandler = () => {
    dispatch(uiActions.toggleAddNewShop());
  };
  const toggleFilterMenuHandler = () => {
    dispatch(uiActions.toggleFilterMenu());
    dispatch(uiActions.toggleAddNewShop());
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        {addNewShopIsVisible ? (
          <AddNewShop />
        ) : (
          <button onClick={toggleAddNewShopHandler}>Add New Shop</button>
        )}
        {filterMenuIsVisible ? (
          <FilterBar />
        ) : (
          <button onClick={toggleFilterMenuHandler}>Show Filter Menu</button>
        )}
        <ShopList />
      </AppWrapper>
    </>
  );
};

export default App;
