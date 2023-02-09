const string1 = '88005553535';

const func = (str) => {
  return`${str.slice(0,1)} (${str.slice(1,4)}) ${str.slice(4,7)}-${str.slice(7,9)}-${str.slice(9,11)}`;
 };
console.log(func(string1));

