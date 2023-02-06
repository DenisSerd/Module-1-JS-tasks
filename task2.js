const array = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6]
const func = (arr) => {
  return arr.filter((item, index) => (index % 2 === 0))
}
console.log(func(array))