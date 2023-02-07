const arrTriangle = [
  {a: 5, b: 3, c: 4},
  {a: 1, b: 3, c: 4},
  {a: 4, b: 7, c: 4},
  {a: 2, b: 2, c: 3}];
const functPerimeter = (triangle) => {
  return triangle.map (({a, b, c}) => ({p: a + b + c}));
};
console.log(functPerimeter(arrTriangle));