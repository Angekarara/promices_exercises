// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
function steps(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n);
    }, 1000);
  });
}

async function counting() {
  try {
    console.log(await steps(1));
    console.log(await steps(2));
    console.log(await steps(3));
  } catch (error) {
    console.log('Error')
  }
}

console.log(counting());