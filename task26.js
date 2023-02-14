const array = [1, 2, 3];
const funct = (ar,...arg) => ar.concat(...arg);
console.log(funct(array,1,2,3,4,5,6,7));