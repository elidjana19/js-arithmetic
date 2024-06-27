
// Converting decimals into integers do the arithmetic operation
// and convert back to deximal
console.log("Solution 2 converting to integers")
console.log(0.1*0.2)   // 0.020000000000000004
console.log(((0.1*10)*(0.2*10))/100) //0.02

console.log(0.3-0.1)   // 0.19999999999999998
console.log(((0.3*10)-(0.1*10))/10) //0.2




function doRightFloatingArithmetic(x, y, operation) {
    let result=0
    let precision = 10; 
    let xResult = x * precision;
    let yResult = y * precision;
   
    if (operation === 'multiply') {
        result = (xResult * yResult) / (precision * precision);
    } else if (operation === 'add') {
        result = (xResult + yResult) / precision;
    } else  if (operation === 'minus'){

        result= (xResult -yResult)/precision
    }
    else if (operation === 'divide'){
        result= x/y
    }
    else{
        console.log("not right arguments")
    }
    return result
}

console.log(doRightFloatingArithmetic(0.1, 0.2, 'add'))
console.log(doRightFloatingArithmetic(0.1, 0.2, 'multiply'))
console.log(doRightFloatingArithmetic(0.2, 0.1, 'minus'))
console.log(doRightFloatingArithmetic(0.1, 0.2, 'divide'))

console.log(0.9*0.2)
console.log(doRightFloatingArithmetic(0.9, 0.2, 'multiply'))

console.log(0.3-0.1)
console.log(doRightFloatingArithmetic(0.3, 0.1, 'minus'))

console.log(0.5/0.1)