// steps: 1. initializing a counter that will be incrementing
// incrementing the counter and display it every 2 seconds
// stop displaying the number after 10 seconds

function stopCounter(interval, timeout) {
  let counter = 0;
  const intervalInMilliSeconds = interval * 1000;
  const timeoutInMilliSeconds = timeout * 1000;

  const intervalID = setInterval(() => {
    counter++;
    console.log(counter);
  }, intervalInMilliSeconds);
  setTimeout(() => {
    // if (counter * intervalInMilliSeconds >= timeoutInMilliSeconds) {
      clearInterval(intervalID);
    // }
  }, timeoutInMilliSeconds);
}

stopCounter(1, 5);

// function twoSeconds() {
//     let interval;
//     let num = 0
//     return new Promise(() => {
//       interval = setInterval(() => {
//         num++
//       },2000);
//     });

//   }
//   twoSeconds().then(n =>{
//     console.log(n)
//   })

//  function succed(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Success!")
//         }, 1000);
//     })
//  }
//  succed().then(message => console.log(`${message}`))

//  function succed(){
//     return new Promise((_, reject)=> {
//         setTimeout(() => {
//             reject("Error")
//         }, 1000);
//     })
//  }
//  succed().catch(error => console.error(`${error}`))
