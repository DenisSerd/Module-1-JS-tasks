const object = {
  id: 123,
  first_name: 'Ivan',
  last_name: 'Ivanov',
  password: 'Mypwd!23',
  age: 13
};
const funct = (obj) => {
  let clone = Object.assign({}, obj);
  delete clone.password;
  return clone;
};
console.log(funct(object));