```typescript
function startSorting(array:number[]) {
    quickSort(array, 0, array.length - 1);
    console.log(array);
}
function quickSort(arr:number[], left :number, right:number) {
    if (left < right) {
        const partitionPoint = partitionArray(arr, left, right);
        quickSort(arr, left, partitionPoint-1);
        quickSort(arr, partitionPoint + 1, right);
    }
}

function partitionArray(arr:number[], left :number, right:number):number {
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
function swap(arr:number[], left :number, right:number) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
const array = [10, 8, 1, 2, 9, 7, 6];
startSorting(array);
```