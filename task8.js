const arrayUsers = [
  { name: 'Ivan', age: 24 },
  { name: 'Oleg', age: 16 },
  { name: 'Igor', age: 24 }
];
const funct = (arr) => {
  return arr.reduce((accum, current) => accum + current.age, 0);
};
console.log(funct(arrayUsers));
