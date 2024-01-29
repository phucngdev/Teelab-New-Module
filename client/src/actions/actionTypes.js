import {
  ATC_ADDTOCART,
  ATC_DECREASE,
  ATC_DELETECART,
  ATC_INCREASE,
} from "../contains";

export const act_addToCart = (id, img, name, price, num) => {
  return {
    type: ATC_ADDTOCART,
    payload: { id, img, name, price, num },
  };
};
export const act_deleteCart = (id) => {
  return {
    type: ATC_DELETECART,
    payload: id,
  };
};
export const act_increase = (id) => {
  return {
    type: ATC_INCREASE,
    payload: id,
  };
};
export const act_decrease = (id) => {
  return {
    type: ATC_DECREASE,
    payload: id,
  };
};
