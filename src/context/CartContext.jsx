import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
const CartContext = createContext();
const BASE_URL = `https://crudcrud.com/api/9d10106cf13d4ee18090a8c5767bfaa4/cartdetails`;

export function useCartContext() {
  return useContext(CartContext);
}

export function CartContextProvider(props) {
  const [cartProductsDetails, setCartProductsDetails] = useState([]);
  
  async function getRequestHandler(){
    try{
      const {data} = await axios.get(BASE_URL);
     setCartProductsDetails(data && [...data]);
    }catch(err){
      console.log("Error in get request");
    }
  }
  useEffect(()=>{
      getRequestHandler();
  },[])

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