
const string1 = 'BanAna';
const string2 = 'aaabnn';
const string3 = 'ass';

// efficient frequency counter
// check if two strings are anagrams:
// O(3n)
function anagram(string1, string2) {
    if (string1.length !== string2.length) return false;

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for (let letter of string1) {
        letter = letter.toLowerCase();
        letter in frequencyCounter1 ? frequencyCounter1[letter]++ : frequencyCounter1[letter] = 1;
    }
    for (let letter of string2) {
        letter = letter.toLowerCase();
        letter in frequencyCounter2 ? frequencyCounter2[letter]++ : frequencyCounter2[letter] = 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) return false;
        if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
    }
    return true;
}

// console.log(anagram(string1, string2));

// check if digits of two integers occur at the same frequency
// returns boolean
function sameFrequency(n1, n2) {
    n1 = n1.toString().split('');
    n2 = n2.toString().split('');

    const freqCounter1 = {};
    const freqCounter2 = {};

    for (let num of n1) {
        if (num in freqCounter1) freqCounter1[num]++;
        else freqCounter1[num] = 1;
    }

    for (let num of n2) {
        if (num in freqCounter2) freqCounter2[num]++;
        else freqCounter2[num] = 1;
    }

    for (let key in freqCounter1) {
        if (!key in freqCounter2) return false;
        else if (freqCounter2[key] !== freqCounter1[key]) return false;
    }
    return true;
}

// check if any arguments in variable amount of arguments are duplicates:
// returns boolean
function areThereDuplicates() {
    if (arguments.length === 0) return false;
    console.log(arguments)
    
    const freqCounter1 = {};
    for (let key in arguments) {
        console.log(arguments[key])
        if (arguments[key] in freqCounter1) return true;
        else freqCounter1[arguments[key]] = 1;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 2));