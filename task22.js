const startArr = 4;
const endArr = 6;
const array = [13, 14, 32, 23, 34, 21, 44, 47, 86];
const funct = (arr,start,end) => {
  return arr.slice(start,end+1);
};
console.log(funct(array, startArr, endArr));