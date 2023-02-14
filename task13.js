const array = ["str", 123, "123", true, null, {}, 2];
const funct = (ar) => {
  ar.forEach(item => {
    switch (typeof item){
      case 'string': console.log('Это строка')
        break;
      case 'number': console.log('Это число')
        break;
      case 'boolean': console.log('Это булево значение')
        break;
      default:
        console.log('Неизвестное значение');
        break;
    };}
  );
};
funct(array);