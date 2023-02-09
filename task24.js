const array = [42, 325, 12, 445, 11, 54, 1, 3, 2, 3123];
const sort = 'NOT SORT';
const funct = (ar, srt) => {
  switch (srt) {
    case 'ASC':
      return ar.sort((a, b) => a - b);
      break;
    case 'DESK':
      return ar.sort((a, b) => b - a);
      break;
    default:
      return ar.sort()
      break;
  };
};
console.log(funct(array, sort));