const user = {
  id: 123,
  first_name: 'Ivan',
  last_name: 'Ivanov',
  password: 'Mypwd!23',
  age: 13
};
const changed = {
  age: 15,
  password: 'new password'
};
const funct = (obj, newObj) => Object.assign (obj, newObj);
console.log(funct(user,changed));