const string = "ivanov.oleg@pochta.com";
const funct = (str) => {
  const obj = {
    userName:str.split('@')[0],
    domainName: str.split('@')[1],
     };
  return obj;
};
console.log(funct(string));
