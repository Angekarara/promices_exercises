// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
function steps(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(n)
    }, 1000);
  });
}

steps(1)
  .then((num) => {
    console.log(num)
    return steps(2);
  })
  .then((num) => {
    console.log(num)
    return steps(3);
  })
  .then((num) => {
    console.log(num)
  })
