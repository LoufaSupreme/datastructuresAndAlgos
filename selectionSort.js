function selectionSort(arr) {
    console.log(`Start: ${arr}`);

    function swap(arr, indA, indB) {
        const temp = arr[indA];
        arr[indA] = arr[indB];
        arr[indB] = temp;
    }

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i != minIndex) swap(arr, i, minIndex);
    }
    console.log(`  End: ${arr}`)
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

selectionSort(randomArray);