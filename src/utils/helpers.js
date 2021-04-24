export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "IRR",
  }).format(number * 1000);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
