import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export function useCartContext(){
    return useContext(CartContext);
}

export function ContextProvider(props) {
    const [cartProductsDetails, setCartProductsDetails] = useState([]);

    const contextData ={
        cartProductsDetails,
        setCartProductsDetails
    }
  return (
    <CartContext.Provider value={contextData}>
        {props.children}
    </CartContext.Provider>
  )
}