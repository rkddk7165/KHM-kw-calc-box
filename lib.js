    
    
//average function
function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
    }

//prime function
 function prime(num) {
      if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

  //factorial function
  function fact(num) {
    if (num === 0 || num === 1){
        return 1;
    }
    return num * fact(num - 1);
  }


module.exports = {
    avg,
    prime,
    fact
  }