function multiply(callB){
    
callB()
}
function callB(a,b){
    console.log(a*b)
return a*b
}
multiply(3,3, callB)