export const getDicountPrice = (percent, price) => {
  const percentValue = percent / 100;
  const percentPrice = price * percentValue;
  return price - percentPrice;
};
