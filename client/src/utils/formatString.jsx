const FormatString = (item) => {
  let numberPriceat = parseFloat(item?.replace(/[^\d]/g, ""));
  return numberPriceat;
};

export default FormatString;
