function startSorting(array) {
    quickSort(array, 0, array.length - 1);
    console.log(array);
}
function quickSort(arr, left, right) {
    if (left < right) {
        const partitionPoint = partitionArray(arr, left, right);
        quickSort(arr, left, partitionPoint-1);
        quickSort(arr, partitionPoint + 1, right);
    }
}

function partitionArray(arr, left, right) {
    const pivot = arr[left];
    const pivotPosition = left;
    while (left < right) {
        while (arr[left] <= pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left < right) {
            swap(arr, left, right);
        }
    }
    swap(arr, pivotPosition, right);
    return right;

}
function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
const array = [10, 8, 1, 2, 9, 7, 6];
startSorting(array);

const array1 = [6, 3, 100, 2, 9, 10, 5];
startSorting(array1);