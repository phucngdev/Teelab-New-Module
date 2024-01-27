import { ATC_ADDTOCART } from "../contains";

export const act_addToCart = (id, img, name, price, num) => {
  return {
    type: ATC_ADDTOCART,
    payload: { id, img, name, price, num },
  };
};
