const string = "Иванов Пётр Андреевич";
const funct = (str) => {
  const obj = {
    firstName:str.split(' ')[1],
    lastName: str.split(' ')[0],
    patronymicName: str.split(' ')[2]
  };
  return obj;
};
console.log(funct(string));