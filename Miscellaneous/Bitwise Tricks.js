//snoob lo, returns the next lower number
// with the same number of set bits

let snooblo=y=>{
    let    t = y + 1;
     let  u = t ^ y;
      let  v = t & y;
     let   x = v - (v & -v) / (u + 1);
     return x
   }

//snoob hi, returns the next higher number
// with the same number of set bits

let snoob=x=>{
    // right most set bit 
    let rightOne = x & -x; 
    
    // reset the pattern and set next higher bit 
    // left part of x will be here 
    let nextHigherOneBit = x + rightOne; 

    // nextHigherOneBit is now part [D] of the above explanation. 

    // isolate the pattern 
    let rightOnesPattern = x ^ nextHigherOneBit; 

    // right adjust pattern 
    rightOnesPattern = (rightOnesPattern)/rightOne; 

    // correction factor 
    rightOnesPattern >>= 2; 

    // rightOnesPattern is now part [A] of the above explanation. 

    // integrate new pattern (Add [D] and [A]) 
    let next = nextHigherOneBit | rightOnesPattern; 
    return next
}