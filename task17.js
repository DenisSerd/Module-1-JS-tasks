const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const funct = (arr1, arr2, arr3) => {
  const arrAll = [];
  return arrAll.concat(arr1, arr2, arr3);
};
console.log(funct(array1, array2, array3));