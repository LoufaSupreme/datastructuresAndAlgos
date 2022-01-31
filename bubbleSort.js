function bubbleSort(arr) {
    // console.log(`START: ${arr}`)
    function swap(arr, indA, indB) {
        const temp = arr[indA];
        arr[indA] = arr[indB];
        arr[indB] = temp;
    }

    for (let i = arr.length-1; i >= 0; i--) {
        let swaps = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                swaps++;
            }
        }
        if (swaps === 0) {
            // console.log(`  QUICK END: ${arr}`)
            return arr;
        }
        swaps = 0;
    }
    console.log(`  END: ${arr}`)
    return arr;
}

function randArray(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * n))
    }
    return result;
}

const sample = [9,2,5,7,2,121,5,34,7];
const randomArray = randArray(100000);

bubbleSort(randomArray);
randomArray.sort((a, b) => a - b); // very fast

 