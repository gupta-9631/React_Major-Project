import { createContext, useContext, useReducer } from "react";
import { popularProducts } from "../data";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = popularProducts;

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
