const str = ['hello', 'world', 'time', 'match'];

const popAll = (str) => {
  while(str.length){
    console.log(str.pop());
  }
}
popAll(str);