const { performance } = require('perf_hooks');

// make an array full of random integers:
function randomArray(length) {
    const arr = [];
    for(let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * length));
    }
    return arr;
}

// iterative factorial
function iterativeFactorial(n) {
    let total = 1;
    for (let i = 0; i < n; i++) {
        total *= (n - i);
    }
    return total;
}

// recursive factorial
function recursiveFactorial(n) {
    if (n <= 1) return 1;
    return n * recursiveFactorial(n-1);
}

// calculate exponents
function power(n, exp) {
    if (exp === 0) return 1;
    return n * power(n, exp-1);
}

// multiple all values of an array
function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// add all numbers between 0 and n:
function recursiveRange(n) {
    if (n === 0) return 0;
    if (n > 0) return n + recursiveRange(n-1);
    else if (n < 0) return n + recursiveRange(n+1);
}

// return nth number of fibonacci sequence
// 1, 1, 2, 3, 5, 8
function fib(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fib(n-1) + fib(n-2);
}

// reverse string
function reverse(str) {
    if(str.length <= 1) return str;
    return str[str.length-1] + reverse(str.substring(0, str.length-1));
}

// check for palindromes
function isPalindrome(str) {
    const reversed = reverse(str);
    if (str === reversed) return true;
    return false;
}

// flattens an array of arrays
function flatten(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]));
        }
        else newArr.push(arr[i]);
    }
    return newArr;
}

// capitalize the first letter of each word in the array
function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substring(1)];
    }
    const rest = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substring(1);
    rest.push(string);
    return rest;
}

const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
}
  
const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

// sum all even values in nested objects:
function nestedEvenSum(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        }
        else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}
  
// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10
  
// capitalize all words in array:
function capitalizeWords(arr) {
    if (arr.length === 1) return [arr[0].toUpperCase()];
    const res = capitalizeWords(arr.slice(0, -1));
    res.push(arr.slice(arr.length-1)[0].toUpperCase());
    return res;
}

// console.log(capitalizeWords(['i', 'am', 'learning']));

// turns all numbers in nested object into strings:
// returns new object
function stringifyNumbers(obj) {
    let result = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result[key] = stringifyNumbers(obj[key]);
        }
        else if (typeof obj[key] === 'number') {
            result[key] = obj[key].toString();
        }
        else {
            result[key] = obj[key];
        }
    }
    return result;
}

const stringifyObj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// console.log(stringifyNumbers(stringifyObj));

// return an array of all the values in a nested object that are strings:
function collectStrings(obj) {
    let result = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result = result.concat(collectStrings(obj[key]));
        }
        else if (typeof obj[key] === 'string') {
            result.push(obj[key])
        }
    }
    return result;
}


const collectStringsObj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// console.log(collectStrings(collectStringsObj)); // ["foo", "bar", "baz"])

function recursiveBinarySearch(arr, target) {
    const middle = Math.ceil((arr.length-1) / 2);
    // console.log(`Target: ${target}, MiddleIndex: ${middle}, Middle: ${arr[middle]}`)
    // console.log(arr)

    if (arr[middle] === target) return true;
    if (arr.length === 0) return false;
    if (arr.length === 1) return arr[0] === target ? true : false;
    if (arr[middle] > target) {
        return recursiveBinarySearch(arr.slice(0, middle), target)
    }
    else if (arr[middle] < target) {
        return recursiveBinarySearch(arr.slice(middle+1, arr.length), target);
    }
}

function windowBinarySearch(arr, target) {
    // console.log(`Target: ${target}`)
    let start = 0;
    let end = arr.length-1;

    while (start <= end) {
        let middle = Math.floor((end + start) / 2);
        // console.log(start, middle, end, {target});
        // console.log(arr.slice(start, end+1))

        if (arr[middle] === target) return middle;
        if (end === start) return arr[start] === target ? start : -1;
        if (target > arr[middle]) {
            start = middle + 1;
        }
        else if (target < arr[middle]) {
            end = middle - 1;
        }
    }
    return -1;
}

const randSortedArray = randomArray(100000).sort((a,b) => a - b);
const randNum = Math.floor(Math.random() * 100000);

let start = performance.now();
const recurseSearch = recursiveBinarySearch(randSortedArray, randNum);
let end = performance.now();
const recurseTime = end - start;
console.log(`Recursive: ${recurseSearch} in ${recurseTime}`)

start = performance.now();
const windowSearch = windowBinarySearch(randSortedArray, randNum);
end = performance.now();
const windowTime = end - start;
console.log(`Window: ${windowSearch} in ${windowTime}`)


