import {
  ATC_ADDTOCART,
  ATC_DELETECART,
  ATC_INCREASE,
  ATC_DECREASE,
} from "../contains";

const initialstate = [];
export const cartStore = (state = initialstate, action) => {
  switch (action.type) {
    case ATC_ADDTOCART:
      const { id, num } = action.payload;
      const updatedCart = state.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            num: product.num + num,
          };
        }
        return product;
      });
      if (updatedCart.some((product) => product.id === id)) {
        return updatedCart;
      } else {
        const newState = [...state, action.payload];
        return newState;
      }
    case ATC_DELETECART:
      const idDelete = action.payload;
      const newState = state.filter((cart) => cart.id !== idDelete);
      return newState;
    case ATC_INCREASE:
      const idIncrease = action.payload;
      const newStateIncre = state.map((item) => {
        if (item.id === idIncrease) {
          return {
            ...item,
            num: item.num + 1,
          };
        }
        return item;
      });
      return newStateIncre;
    case ATC_DECREASE:
      const idDecrease = action.payload;
      const newStateDecrease = state.map((item) => {
        if (item.id === idDecrease) {
          return {
            ...item,
            num: Math.max(item.num - 1, 1),
          };
        }
        return item;
      });
      return newStateDecrease;
    default:
      return state;
  }
};
