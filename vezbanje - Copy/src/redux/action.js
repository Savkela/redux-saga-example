import { ADD_TO_CART } from "./constant";
import { REMOVE_FROM_CART } from "./constant";
import { EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("ACTION ADD", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  console.warn("ACTION REMOVE", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};

export const emptyCart = (data) => {
  console.warn("ACTION EMPTY", data);
  return {
    type: EMPTY_CART,
    data: data,
  };
};
