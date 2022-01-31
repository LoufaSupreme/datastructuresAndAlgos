const { performance } = require('perf_hooks');

const arr1 = [-3,-2,-1,0,1,3,4];
const arr2 = [-3,2,4,5,6];
const arr3 = [-3,-2,-1,0,0,2,4,5,6];
const arr4 = [1,1,1,3,4,4,5,6,7];

// efficient function that returns the first pair of numbers in a sorted array that sum to zero:
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        else if (sum > 0) right--;
        else left++;
    }
}

// console.log(`Answer: ${sumZero(arr3)}`);

// write function that counts the amount of unique values in a sorted array:
function countUniqueValues(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] === arr[i+1]) {
            let j = i+1;
            while (arr[j] === arr[i]) {
                j++;
            }
            let tmp = j-1;
            i = tmp;
        }
    }
    return count;
}

// make an array full of random integers:
function randomArray(length) {
    const arr = [];
    for(let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * length));
    }
    return arr;
}

// highly efficient version
// note that it alters the array
function countUniqueValuesInplace(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

// naive solution:
function naiveCountUniqueValues(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) unique.push(arr[i]);
    }
    return unique.length;
}

const randomArr = randomArray(1000).sort();

let start = performance.now();
console.log(`Naive: ${naiveCountUniqueValues(randomArr)}`);
let end = performance.now();
let time1 = (end - start) / 1000;
console.log(`Time: ${time1.toFixed(6)}s`)

start = performance.now();
console.log(`Mine: ${countUniqueValues(randomArr)}`);
end = performance.now();
let time2 = (end - start) / 1000;
console.log(`Time: ${time2.toFixed(6)}s`)

start = performance.now();
console.log(`Efficient: ${countUniqueValuesInplace(randomArr)}`);
end = performance.now();
let time3 = (end - start) / 1000;
console.log(`Time: ${time3.toFixed(6)}s`);

console.log(`Naive 0% -> Mine ${Math.round((time1 - time2) / time2 * 100)}% -> Efficient ${Math.round((time2 - time3) / time3 * 100)}%`)


// check if any arguments in variable amount of arguments are duplicates:
// returns boolean
function areThereDuplicates(...args) {
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
// console.log(areThereDuplicates(1, 2, 2));

// given a sorted array, determine if there is a pair of values whose avg matches the target avg
// returns boolean
function averagePair(arr, targetAvg) {
    if (arr.length <= 1) return false;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2; 
        if (avg === targetAvg) return true;
        else if (avg > targetAvg) right--;
        else if (avg < targetAvg) left++;
    }
    return false;
}

console.log(averagePair([1,3,3,4,5,6,7,10,12,19], 8));

// check if first string is a substring of the second string
// returns boolean
function isSubsequence(string1, string2) {
    const targetLength = string1.length;
    let index = 0;
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] === string1[index]) {
            index++;
        }
        if (index === targetLength - 1) return true;
    }
    return false;
}

// recursive version
function isSubsequenceRecurse(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }

console.log('----------------')
console.log(isSubsequence('sing', 'sting'));  // true


