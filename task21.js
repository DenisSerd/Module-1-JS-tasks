const object = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  email: 'ivanov@pochta.com'
};
const funct = (obj) => {
  return `${obj.lastName} ${obj.firstName} E-mail:${obj.email} `
  };
console.log(funct(object));
