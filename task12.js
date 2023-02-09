const arr = [[], []];
const funct = (ar) => {
  let N = 0;
  for (let i = 0; i < 10; i++) {
    ar[i] = [];
    for (let j = 0; j < 17; j++) {
      ar[i][j] = N * N;
      N++;
      if (N > 100) {
        return ar;
      };
    };
  };
};
console.table(funct(arr));
