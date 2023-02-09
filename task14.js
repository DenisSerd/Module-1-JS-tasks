const arg1 = 2;
const arg2 = 2;
const operator = "/";
const funct = (a, b, oper) => {
  switch (oper) {
    case '+' :
      return a + b;
      break;
    case '-' :
      return a - b;
      break;
    case '*' :
      return a * b;
      break;
    case '/' :
      return b != 0 ? a / b : "На ноль делить нельзя!";
      break;
    case '%' :
      return a % b;
      break;
    default:
      return "Неверные данные!";
      break;
  };
};
console.log(funct(arg1, arg2, operator));