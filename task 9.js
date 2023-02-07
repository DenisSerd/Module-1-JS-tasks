const arrUsers = [
  { name: 'Ivan', age: 24 },
  { name: 'Oleg', age: 15 },
  { name: 'Igor', age: 24 }
];
const funct = (arr) => {
  let min = arr[0].age;
  let max = arr[0].age;
  arr.forEach((item) => {
    if (item.age > max) {
      max = item.age;
    }
    if (item.age < min) {
      min = item.age;
    }
  })
  return {min, max};
};
console.log(funct(arrUsers));

