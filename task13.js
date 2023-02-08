const array = ["str", 123, "123", true, null, {}, 2];
const funct = (ar) => {
  ar.forEach(item => console.log(typeof item));
};
funct(array);