let p = new Promise((resolve, reject) => {
  let a = 1+6
  if(a ==2){
    resolve('success')
  } else{
    reject ('failed ')
  }
})

p.then( message => {
  console.log(`this is in the then ${message}`)
}).catch(message => {
  console.log(`this is in the catch ${message}`)
})