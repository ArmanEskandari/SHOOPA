export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "IRR",
  }).format(number);
  return newNumber;
};
