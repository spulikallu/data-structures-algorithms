function addUpTo(n){
  return n*(n+1)/2;
}

console.log(addUpTo(5));

console.log(performance.now())
var t1 = performance.now();
addUpTo(1000000000);
console.log(performance.now())
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds`);