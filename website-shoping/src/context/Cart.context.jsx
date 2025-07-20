import { createContext, useEffect,useReducer, useState } from "react";

const CART_INIT_STATE = {
   isCartOpen:false,
   cartItems:[],
   cartCount:0,
   cartTotal:0
}

const addCartItem = (cartItems, productToAdd) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemtoRemove) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoRemove.id
  );
  if (existCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemtoRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemtoRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems, clearCart) => {
  return cartItems.filter((cartItem) => cartItem.id !== clearCart.id);
};
const CART_ACTION = {
   ADD_TO_CART:'ADD_TO_CART'
}
const cartReducer = (state,action)=>{
  const {type,payload}=action
  switch(type){
    case CART_ACTION.ADD_TO_CART:
      return {
        ...state,
        cartItems:addCartItem(state.cartItems,payload)
      }
      return 
     default:
      throw new Error(`unhandle type of ${type} of cartReducer`)
  }
 
}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  addCart: () => {},
  removeCart: () => {},
  clearCart: () => {},
  total: 0,
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setCartTotal] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeCart = (removeCartProduct) => {
    setCartItems(removeCartItem(cartItems, removeCartProduct));
  };
  const clearCart = (cleartCartProduct) => {
    setCartItems(clearCartItem(cartItems, cleartCartProduct));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addCart,
    cartItems,
    cartCount,
    removeCart,
    clearCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
