import React, { useContext, useEffect, useReducer } from "react";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";
import reducer from "../reducers/products_reducer";

const initialState = {
  isSidebarOpen: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    console.log("opened");
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    console.log("closed");
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
