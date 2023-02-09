const array = ['aaa', 'bbb', 'ccc', 'aaa', 'bbb', '', 'aaa'];
const funct = (arr) => {
  const arrOut = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arrOut.includes(arr[i]) && arr[i] !== '') {
      arrOut.push(arr[i],
        arr.filter(item => item === arr[i]).length);
    }
  };
  let str = '';
  for (let i = 0; i < arrOut.length; i++) {
    str += arrOut[i] + ' ';
  };
  return str;
};
console.log(funct(array));

