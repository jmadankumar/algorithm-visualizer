function merge(arr, leftArr, leftSize, rightArr, rightSize) {
    console.log('arr', arr);
    console.log('leftArr', leftArr);
    console.log('leftSize', leftSize);
    console.log('rightArr', rightArr);
    console.log('rightSize', rightSize);
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
    console.log('=============start==========');
    console.log('arr', arr);
    console.log('size', size);
    if (size < 2) {
        return;
    }
    const mid = Math.round(size / 2);
    console.log('mid', mid);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, size);
    mergeSort(leftArr, mid);
    mergeSort(rightArr, size - mid);
    merge(arr, leftArr, mid, rightArr, size - mid);
    console.log('after merge', arr);
    console.log('=============end==========');

}
function startSorting() {
    const array = [10, 8, 1, 2, 9, 7, 6];
    mergeSort(array, array.length);
    console.log('result', array);
}

startSorting();