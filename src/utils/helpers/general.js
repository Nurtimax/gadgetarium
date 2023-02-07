export const priceProductSeparate = (number) => {
  return number.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
};
