for (let num = 100; num < 1000; num++) {
    let hundreds = Math.floor(num / 100);
    let tens = Math.floor((num % 100) / 10);
    let ones = num % 10;
    
    let sum = hundreds ** 3 + tens ** 3 + ones ** 3;
    
    if (sum === num) {
        console.log(num);
    }
}