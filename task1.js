const array = [
  { name: 'Milk', price: 20, amount: 15 },
  { name: 'Coffee', price: 30, amount: 17 },
  { name: 'Tea', price: 10, amount: 14 }
]
const func = (arr) => {
  return arr.map((item) => ({ name: item.name, total: item.price * item.amount }))
}

console.log(func(array))