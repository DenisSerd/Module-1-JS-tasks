let arr1 = [[], []];
const funct = (ar) => {
  for (let i = 0; i < 10; i++) {
    ar[i] = [];
    for (let j = 0; j < 10; j++) {
      ar[i][j] = i * j;
    }
  }
  return ar;
};
console.table(funct(arr1));