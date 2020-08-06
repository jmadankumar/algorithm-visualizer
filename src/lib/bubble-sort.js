function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function bubbleSort(arr) {
    const maxAllowedIndex = arr.length - 1;
    let noOfIter = 0;
    for (let i = 0; i < maxAllowedIndex; i++) {
        let swapped = false;
        for (let j = 0; j < maxAllowedIndex; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);            
                swapped = true
            }
        }
        if (!swapped) {
            break;
        }
        noOfIter++;
    }
    console.log(noOfIter);
}
function startSorting() {
    const array = [10, 8, 1, 2, 9, 7, 6];
    bubbleSort(array);
    console.log(array);
}
startSorting();