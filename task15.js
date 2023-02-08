const array = [1, 2, 3, 4];
const filterFunct = (item) => item % 2 === 0;
const transfArr = (item) => item * 2;
const funct = (func1, func2, arr) => {
  return arr.filter(func1).map(func2);
};
console.log(funct(filterFunct, transfArr, array));

