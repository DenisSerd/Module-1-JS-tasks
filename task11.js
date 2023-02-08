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

//
//
// var n = 4, m = 4;
// var mas = [];
// for (var i = 0; i < m; i++){
//   mas[i] = [];
//   for (var j = 0; j < n; j++){
//   mas[i][j] = 0;
//     }}
// 8
// console.log(mas);
//
//
