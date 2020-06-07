```js
function merge(arr, leftArr, leftSize, rightArr, rightSize) {
    let i = 0, j = 0, k = 0;
    while (i < leftSize && j < rightSize) {
        if (leftArr[i] < rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }
    while (i < leftSize) {
        arr[k++] = leftArr[i++];
    }
    while (j < rightSize) {
        arr[k++] = rightArr[j++];
    }
}
function mergeSort(arr, size) {
    if (size < 2) {
        return;
    }
    const mid = Math.round(size / 2);

    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, size);

    mergeSort(leftArr, mid);
    mergeSort(rightArr, size - mid);
    
    merge(arr, leftArr, mid, rightArr, size - mid);

}
function startSorting() {
    const array = [10, 8, 1, 2, 9, 7, 6];
    mergeSort(array, array.length);
    console.log('result', array);
}

startSorting();
```