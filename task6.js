const arr = [
  { name: "Ivan", age: 24 },
  { name: "Oleg", age: 16 },
  { name: "Igor", age: 24 }];
const func = (array) => {
  array.forEach((elem) => {
    if (elem.age >= 18) {
      console.log(elem.name);
    };});
};
func(arr);