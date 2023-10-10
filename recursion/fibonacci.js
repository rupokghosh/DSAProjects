//iterative method 

function fibs(n){

    let sequence = [];

    for(let i = 0; i < n; i++){

        if(i === 0){                                        /// by definition F0 = 0
            sequence[0] = 0;                                /// by definition F1 = 1 & F2 = 2
        } else if(i === 1 || i === 2){
            sequence[i] = 1;
        } else if ( i > 2 ){                                /// implenting formula Fn = Fn-1 + Fn-2
            sequence[i] = sequence[i-1] + sequence[i-2];
        }
    }
    return sequence;
   
}
console.log(fibs(8));

// recursive method

function fibsRec(n, currentNum = 0, nextNum = 1, result = []) {
    if (n === 0) {
      return result;
    }
    result.push(currentNum);
    return fibsRec(n - 1, nextNum, currentNum + nextNum, result);
  }

console.log(fibsRec(8));