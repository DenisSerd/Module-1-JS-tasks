const object = {
  id: 123,
  firstName: 'Ivan',
  lastName: 'Ivanov',
  password: 'new password',
  age: 15
};
const funct = (obj) => {
  const { firstName, lastName } = obj;
  console.log(firstName, lastName);
};
funct(object);
