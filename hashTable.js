
// simple example hash function for strings
// converts a string to a number between 0 and the length of the hash table
// this example does not hash with constant time... it is dependent on the key length (not optimal)

function hash(key, hashTableLength) {
    let total = 0;
    // add up the ASCII codes of each character in the key:
    for (let char of key) {
        const val = char.charCodeAt(0);
        total += val;
    }
    // normalize the total to be within the bounds of your hash table (i.e. array length)
    return total % hashTableLength;
}

console.log(hash('testing', 14))


// works in constant time (limits number of iterations to 100)
// using a prime numbers help distribute values more evenly
// it also helps to have a hashTableLength that is a prime number too
function improvedHash(key, hashTableLength) {
    let total = 0;
    let WEIRD_PRIME = 31;
    // add up the ASCII codes of each character in the key:
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        const char = key[i];
        const val = char.charCodeAt(0);
        total = (total * WEIRD_PRIME + val);
    }
    // normalize the total to be within the bounds of your hash table (i.e. array length)
    return total % hashTableLength;
}

// note: 13 is prime
console.log(improvedHash('testing', 13));

// an array of arrays, storing key/value pairs in [ [key, value], [key, value] ] format
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    // hashes a key to an integer within 0 - keyMap.length:
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        // add up the ASCII codes of each character in the key:
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const val = char.charCodeAt(0);
            total = (total * WEIRD_PRIME + val);
        }
        // normalize the total to be within the bounds of your hash table (i.e. array length)
        return total % this.keyMap.length;
    }
    // add a new key, value pair to the keyMap:
    // note: this allows us to add duplicates of the same keys... probably not ideal
    set(key, value) {
        const hashIndex = this._hash(key);
        if (this.keyMap[hashIndex] === undefined) {
            this.keyMap[hashIndex] = [];
        }
        this.keyMap[hashIndex].push([key, value]);
        return this.keyMap;
    }
    // retrieve the value associated with given key:
    get(key) {
        const hashIndex = this._hash(key);
        for (let elem of this.keyMap[hashIndex]) {
            if (elem[0] === key) return elem[1];
        }
        return undefined;
    }
    // get array of all keys in HashTable
    keys() {
        const keys = [];
        for (let arr of this.keyMap) {
            if (arr) {
                for (let elem of arr) {
                    keys.push(elem[0])
                }
            }
        }
        return keys;
    }
    // get array of all values in HashTable (not including duplicates)
    values() {
        const vals = [];
        for (let arr of this.keyMap) {
            if (arr) {
                for (let elem of arr) {
                    // don't add duplicates:
                    if (!vals.includes(elem[1])) vals.push(elem[1])
                }
            }
        }
        return vals;
    }
}

const hashTable = new HashTable();
hashTable.set('tootsie', 'roll');
hashTable.set('footsie', 'sexyTime');
hashTable.set('ass', 'crack');
hashTable.set('7', 'ate nine');
hashTable.set('duplicate', 'crack');