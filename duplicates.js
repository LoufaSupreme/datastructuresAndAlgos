// speed comparison of functions that look for duplicate arguments

const { performance } = require('perf_hooks');

// make an array full of random integers:
function randomArray(length) {
    const arr = [];
    for(let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * length));
    }
    return arr;
}

function areThereDuplicatesONELINER() {
    return new Set(arguments).size !== arguments.length;
  }

  function areThereDuplicatesPOINT(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  function areThereDuplicatesFREQ() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

const args = randomArray(100000);

console.log('----------------------')

let start = performance.now();
const oneLine = areThereDuplicatesONELINER(...args);
let end = performance.now();
const oneLineTime = (end - start) / 1000;
console.log(`oneLine: ${oneLine} in ${oneLineTime}s`);

start = performance.now();
const FREQ = areThereDuplicatesFREQ(...args);
end = performance.now();
const freqTime = (end - start) / 1000;
console.log(`FREQ: ${FREQ} in ${freqTime}s`);

start = performance.now();
const POINT = areThereDuplicatesPOINT(...args);
end = performance.now();
const pointTime = (end - start) / 1000;
console.log(`POINT: ${POINT} in ${pointTime}s`);