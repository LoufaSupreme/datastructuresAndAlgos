

function insertionSort(arr) {
    console.log(`START: ${arr}`)
    function swap(arr, indA, indB) {
        const temp = arr[indA];
        arr[indA] = arr[indB];
        arr[indB] = temp;
    }
    
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        // note the use of var below... need it so can access j outside of for-loop
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];            
        }
        arr[j+1] = currentVal;
    }
    console.log(`  END: ${arr}`);
    return arr;
}

function randArray(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * n))
    }
    return result;
}

const randomArray = randArray(10);

const alternate = [...randomArray].sort((a,b) => a - b)
const result = insertionSort(randomArray);
console.log(`  ALT: ${alternate}`)