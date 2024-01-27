import { ATC_ADDTOCART } from "../contains";

const initialstate = [];
export const addToCart = (state = initialstate, action) => {
  switch (action.type) {
    case ATC_ADDTOCART:
      const newState = [...state, action.payload];
      return newState;
    default:
      return state;
  }
};
