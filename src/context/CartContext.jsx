import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
const CartContext = createContext();
const BASE_URL = "https://crudcrud.com/api/9bb3324531e044108ea0c2ede13a3a05/cartdetails";

export function useCartContext() {
  return useContext(CartContext);
}

export function CartContextProvider(props) {
  const [cartProductsDetails, setCartProductsDetails] = useState([]);

  useEffect(() => {
    getRequestHandler();
  }, [])

  async function getRequestHandler() {
    try {
      const {data} = await axios.get(BASE_URL);
      const productData = data.length ? [...data] : [];
      setCartProductsDetails(productData);
    } catch (err) {
      console.log("Error in get request");
    }
  }
  

  const contextData = {
    cartProductsDetails,
    setCartProductsDetails,
  }
  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  )
}