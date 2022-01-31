
// swaps 2 items in an array
function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

// picks a pivot point (first item in arr) and moves all values
// less than val at pivot point to the left
function pivot(arr, pivotIndex = 0, endIndex = arr.length-1) {
    console.log(`Start: ${arr}`)
    let swapIndex = pivotIndex;
    
    for (i = pivotIndex + 1; i <= endIndex; i++) {
        if (arr[i] < arr[pivotIndex]) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, pivotIndex, swapIndex);
    console.log(`  END: ${arr}, Pivot: ${swapIndex}`)
    pivotIndex = swapIndex;
    return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length-1) {
    if (start < end) {
        let pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex-1);
        quickSort(arr, pivotIndex+1, end);
    }
    return arr;
}

function randArray(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * n))
    }
    return result;
}

const arr = [6,5,4,7,2,5,1];
const rand = randArray(200);


// pivot([1,]);
console.log(quickSort(rand));