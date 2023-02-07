const ARRAY = [5,10, 15, 20, 10, 25, 20, 30, 15];
const N = 55;
const funct = (ar, arg) => {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    if (sum < arg) {
      sum += ar[i];
    };
  };
  return sum;
};
console.log(funct(ARRAY, N));