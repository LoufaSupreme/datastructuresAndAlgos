
// RECURSIVE MERGE SORT


// merge 2 sorted arrays together:
function merge(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length || j < arr2.length) {
        // console.log(i, j)
        // console.log({result})
        if (i >= arr1.length) {
            result.push(arr2[j]);
            j++;
        }
        else if (j >= arr2.length) {
            result.push(arr1[i]);
            i++;
        }
        
        else if (arr2[j] < arr1[i]) {
            result.push(arr2[j]);
            j++;
        }
        else {
            result.push(arr1[i]);
            i++;
        }
    }
    // console.log(`Result: ${result}`);
    return result;
}

function randArray(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * n))
    }
    return result;
}

// recursivelly split the array and merge the splits together
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, midPoint));
    let right = mergeSort(arr.slice(midPoint, arr.length));

    return merge(left, right);
}

arr1 = [5,7,6]
arr2 = [1,2,3,9,15,99]
arr3 = [100, 7, 23, 1, 4, 2, 3, 87]
arr4 = []
randomArray = randArray(9);

// merge(arr1, arr2);
// console.log(merge(arr4, arr4));
mergeSorted = mergeSort(randomArray);
// mergeSorted = mergeSort(arr1);
console.log(mergeSorted)

