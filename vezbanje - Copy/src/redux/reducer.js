import { ADD_TO_CART } from "./constant";
import { REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART REDUCER", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART REDUCER", action);
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];
    case EMPTY_CART:
      console.warn("EMTY CART REDUCER", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
