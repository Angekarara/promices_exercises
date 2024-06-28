
function print(message){
return message
}
function repeatEvery(print,interval ){
    intervalInMilliseconds = interval*1000
const timeInterval = setInterval(() => {
    console.log(print('print'))
    // if()
    // clearInterval(timeInterval)
}, intervalInMilliseconds);
}
repeatEvery(print, 2)