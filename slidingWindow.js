const { performance } = require('perf_hooks');

// make an array full of random integers:
function randomArray(length) {
    const arr = [];
    for(let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * length));
    }
    return arr;
}

// return max sum of n numbers in an array:
// naive solution
function naiveMaxSubarraySum(arr, n) {
    if (n > arr.length) return null;
    let biggestSum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length-n+1; i++) {
        let subArraySum = 0;
        for (let j = 0; j < n; j++) {
            subArraySum += arr[i+j];
        }
        if (subArraySum > biggestSum) biggestSum = subArraySum;
    }
    return biggestSum;
}

// create a sliding window range from 0 to num and sum it together
// shift the window over by 1, and add the new number just added to the window, subtract the old number just removed from the window
// this saves having to nest a for loop
function efficientExample(arr, num){
let maxSum = 0;
let tempSum = 0;
if (arr.length < num) return null;
for (let i = 0; i < num; i++) {
    maxSum += arr[i];
}
tempSum = maxSum;
for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
}
return maxSum;
}
  

const arr = randomArray(100);
const arr2 = [1,2,5,2,8,1,5];

console.log('-----------------------');
let start = performance.now();
const naiveMax = naiveMaxSubarraySum(arr, 4);
let end = performance.now();
const naiveTime = (end - start) / 1000;
console.log(`Naive: ${naiveMax} in ${naiveTime}s`);

start = performance.now();
const efficient = efficientExample(arr, 4);
end = performance.now();
const efficientTime = (end - start) / 1000;
console.log(`Efficient: ${efficient} in ${efficientTime}s`);

// find min length of contiguous subarray whose sum is >= target:
function minSubArrayLen(arr, targetSum) {
    let total = 0;
    let minLen = Infinity;
    let left = 0;
    let right = 0;
    while (left < arr.length) {
        if (right < arr.length && total < targetSum) {
            console.log(total)
            total += arr[right];
            right++;
        }
        else if (total >= targetSum) {
            console.log(total)
            minLen = Math.min(minLen, right-left);
            total -= arr[left];
            left++;
        }
        else break;
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log('------------------');
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39))


// find longest substring of unique characters in a given string:
// returns length of substring
function findLongestSubstring(str) {
    let start = 0;
    let seen = {};
    let record = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (seen[char] !== undefined) {
            start = Math.max(start, seen[char] + 1);
        }
        record = Math.max(record, i - start);
        seen[char] = i;
    }
    return record;
}

console.log('-------------------------')
console.log(findLongestSubstring('thecatinthehat'));