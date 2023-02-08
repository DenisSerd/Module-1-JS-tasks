const array = [
  { from: "Ivan", to: "Oleg", amount: 2500 },
  { from: "Ivan", to: "Igor", amount: 2000 },
  { from: "Oleg", to: "Igor", amount: 1500 }];

const funct = (ar) => {
  let sum = ar.reduce((accum, current) => accum + current.amount, 0);
  const averageValue = sum / ar.length;
  console.log(averageValue);
  return ar.map((item) => ({...item, dif: item.amount - averageValue}));
}
console.log(funct(array));


