function multiplesOf3or5(number) {
  let sum = 0;
    for(let i=0; i<number; i++){
      if(i%3 === 0 || i%5 === 0){
        sum += i;
      }
    }
  
  return sum;
}

module.exports = multiplesOf3or5;